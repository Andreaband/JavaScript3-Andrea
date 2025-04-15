const Database = require('better-sqlite3');
const db = new Database('db.sqlite');

// Crea la tabella se non esiste
db.prepare(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    image TEXT,
    price REAL
  )
`).run();

module.exports = db;
