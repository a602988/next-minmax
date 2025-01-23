import path from 'path';
import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

interface ExtendedDatabase extends Database {
  lastAccess: number;
}

const DB_POOL: { [key: string]: ExtendedDatabase } = {};

async function openDb(filename: string): Promise<ExtendedDatabase> {
  if (DB_POOL[filename]) {
    DB_POOL[filename].lastAccess = Date.now();
    return DB_POOL[filename];
  }

  const db = await open({
    filename: path.join(process.cwd(), 'src/data', filename),
    driver: sqlite3.Database
  }) as ExtendedDatabase;

  await db.run('PRAGMA foreign_keys = ON');

  db.lastAccess = Date.now();
  DB_POOL[filename] = db;
  return db;
}

export async function query<T>(filename: string, sql: string, params: any[] = []): Promise<T[]> {
  const db = await openDb(filename);
  const result = await db.all(sql, params);
  return result as T[];
}

// 清理未使用的數據庫連接
setInterval(async () => {
  const now = Date.now();
  for (const [filename, db] of Object.entries(DB_POOL)) {
    if (now - db.lastAccess > 30000) { // 30 秒無訪問則關閉
      await db.close();
      delete DB_POOL[filename];
    }
  }
}, 60000); // 每分鐘檢查一次

export async function closeAllConnections(): Promise<void> {
  for (const db of Object.values(DB_POOL)) {
    await db.close();
  }
  Object.keys(DB_POOL).forEach(key => delete DB_POOL[key]);
}
