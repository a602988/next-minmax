import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import path from 'path';

// Enable verbose mode
sqlite3.verbose();

// Build the full path to the database file
const dbPath = path.join(process.cwd(), 'src', 'data', 'project-base-seeder.sqlite3');

export async function GET() {
  return new Promise((resolve) => {
    console.log('Attempting to open database at:', dbPath);

    // Create database connection
    const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
      if (err) {
        console.error('Error opening database:', err.message);
        resolve(NextResponse.json({ error: 'Database connection error', details: err.message }, { status: 500 }));
        return;
      }

      console.log('Successfully connected to the database.');

      // Query to fetch system menus
      const query = `
        SELECT *
        FROM system_menu
      `;

      console.log('Executing query:', query);

      db.all(query, [], (err, rows) => {
        if (err) {
          console.error('Error executing query:', err.message);
          resolve(NextResponse.json({ error: 'Database query error', details: err.message }, { status: 500 }));
        } else {
          console.log('Query executed successfully. Rows returned:', rows.length);
          resolve(NextResponse.json({ data: rows }, { status: 200 }));
        }

        // Close the database connection
        db.close((err) => {
          if (err) {
            console.error('Error closing database:', err.message);
          } else {
            console.log('Database connection closed successfully.');
          }
        });
      });
    });
  });
}
