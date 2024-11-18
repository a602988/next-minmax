import path from "path";
import sqlite3 from "sqlite3";

export function newConnection(filePath: string): sqlite3.Database {
  const dbPath = path.join(process.cwd(), `src/data/${filePath}`);

  return new sqlite3.Database(
    dbPath,
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
      if (err) {
        // Consider using a logging library instead of console.log
        console.error(err.message);
      }
      // console.log(`Connected to database: ${filePath}`);
    }
  );
}

export async function apiGetOne(connection: sqlite3.Database, query: string): Promise<unknown> {
  return new Promise((resolve, reject) => {
    connection.get(query, (err: Error | null, row) => {
      if (err) {
        // console.log('apiGetOne', err);
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}

export async function apiGetAll(connection: sqlite3.Database, query: string): Promise<Array<unknown>> {
  return new Promise((resolve, reject) => {
    connection.all(query, (err: Error | null, rows) => {
      if (err) {
        // console.log('apiGetAll', err);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

export async function apiPost(connection: sqlite3.Database, query: string, values: Array<string>): Promise<void> {
  return new Promise((resolve, reject) => {
    connection.run(query, values, (err: Error | null) => {
      if (err) {
        // console.log('apiPost', err);
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
