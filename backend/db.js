const Database = require('better-sqlite3');
const path = require('path');


const dbPath = path.resolve(__dirname, 'products.db');
console.log('🧠 DB caricato da:', dbPath);

const db = new Database(dbPath);

// Crea la tabella se non esiste
db.prepare(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    price REAL,
    image_url TEXT
  )
`).run();

module.exports = db;
