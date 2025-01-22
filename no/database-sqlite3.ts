import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';

// 擴展 Database 類型
interface ExtendedDatabase extends Database {
  lastAccess: number;
}

// 連接池
const DB_POOL: { [key: string]: ExtendedDatabase } = {};

// 定義數據庫連接函數
async function openDb(filename: string): Promise<ExtendedDatabase> {
  if (DB_POOL[filename]) {
    DB_POOL[filename].lastAccess = Date.now();
    return DB_POOL[filename];
  }

  const db = await open({
    filename: path.join(process.cwd(), 'src/data', filename),
    driver: sqlite3.Database
  }) as ExtendedDatabase;

  // 啟用外鍵約束
  await db.run('PRAGMA foreign_keys = ON');

  db.lastAccess = Date.now();
  DB_POOL[filename] = db;
  return db;
}

// 導出一個獲取數據庫連接的函數
export async function getDbConnection(filename: string): Promise<ExtendedDatabase> {
  return await openDb(filename);
}

// 導出一個執行查詢的輔助函數
export async function query<T = any>(filename: string, sql: string, params: any[] = []): Promise<T[]> {
  const db = await getDbConnection(filename);
  try {
    // 使用預處理語句
    const stmt = await db.prepare(sql);
    const result = await stmt.all(params);
    db.lastAccess = Date.now(); // 更新最後訪問時間
    return result;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

// 關閉所有數據庫連接
export async function closeAllConnections(): Promise<void> {
  for (const db of Object.values(DB_POOL)) {
    await db.close();
  }
  Object.keys(DB_POOL).forEach(key => delete DB_POOL[key]);
}

// 定期清理閒置連接
setInterval(async () => {
  const now = Date.now();
  for (const [filename, db] of Object.entries(DB_POOL)) {
    if (now - db.lastAccess > 30000) { // 30 秒無訪問則關閉
      await db.close();
      delete DB_POOL[filename];
    }
  }
}, 60000); // 每分鐘檢查一次
