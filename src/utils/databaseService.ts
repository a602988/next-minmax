/**
 * databaseService.ts
 *
 * 重點說明：
 * 1. 此文件實現了一個 SQLite 數據庫連接池管理系統。
 * 2. 使用 sqlite 和 sqlite3 庫來處理數據庫操作。
 * 3. 實現了連接池機制，以提高數據庫操作效率。
 * 4. 提供了自動清理閒置連接的功能，每分鐘檢查一次。
 * 5. 支持外鍵約束，確保數據完整性。
 * 6. 提供了一個通用的查詢函數 query，支持泛型類型。
 * 7. 包含 closeAllConnections 函數，用於在需要時關閉所有連接。
 *
 * 注意：確保在應用程序關閉時調用 closeAllConnections 以釋放資源。
 */

import path from 'path';
import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

// 擴展 Database 接口，添加最後訪問時間
interface ExtendedDatabase extends Database {
  lastAccess: number;
}

// 數據庫連接池
const DB_POOL: { [key: string]: ExtendedDatabase } = {};

// 打開數據庫連接
async function openDb(filename: string): Promise<ExtendedDatabase> {
  // 如果連接池中已存在該連接，更新最後訪問時間並返回
  if (DB_POOL[filename]) {
    DB_POOL[filename].lastAccess = Date.now();
    return DB_POOL[filename];
  }

  // 創建新的數據庫連接
  const db = await open({
    filename: path.join(process.cwd(), 'src/data', filename),
    driver: sqlite3.Database
  }) as ExtendedDatabase;

  // 啟用外鍵約束
  await db.run('PRAGMA foreign_keys = ON');

  // 設置最後訪問時間並將連接添加到連接池
  db.lastAccess = Date.now();
  DB_POOL[filename] = db;
  return db;
}

// 執行數據庫查詢
export async function query<T>(filename: string, sql: string, params: any[] = []): Promise<T[]> {
  // 獲取數據庫連接
  const db = await openDb(filename);
  // 執行 SQL 查詢
  const result = await db.all(sql, params);
  // 返回查詢結果，並進行類型轉換
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

// 關閉所有數據庫連接
export async function closeAllConnections(): Promise<void> {
  for (const db of Object.values(DB_POOL)) {
    await db.close();
  }
  Object.keys(DB_POOL).forEach(key => delete DB_POOL[key]);
}
