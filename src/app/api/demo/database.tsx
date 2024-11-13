import path from "path";
import sqlite3 from "sqlite3";

export const newConnection = (filePath: string) => {
  const dbPath = path.join(process.cwd(), `src/data/${filePath}`);

  return new sqlite3.Database(
      dbPath,
      sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
      (err) => {
        if (err) {
          console.error(err.message);
        }
        console.log(`Connected to database: ${filePath}`);
      }
  );
}

export const apiGetOne = async (connection: sqlite3.Database, query: string) => {
  return await new Promise((resolve, reject) => {
    connection.get(query, (err: Error, row) => {
      if (err) {
        console.log('apiGetOne',err);
        return reject(err);
      }
      return resolve(row);
    });
  });
};

export const apiGetAll = async (connection: sqlite3.Database, query: string) => {
  return await new Promise((resolve, reject) => {
    connection.all(query, (err: Error, rows) => {
      if (err) {
        console.log('apiGetAll',err);
        return reject(err);
      }
      return resolve(rows);
    });
  });
};

export const apiPost = async (connection: sqlite3.Database, query: string, values: string[]) => {
  return await new Promise((resolve, reject) => {
    connection.run(query, values, function (err) {
      if (err) {
        console.log('apiPost',err);
        reject(err);
      }
      resolve(null);
    });
  });
};
