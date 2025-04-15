const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // per leggere JSON nel body

app.get('/products', (req, res) => {
  const products = db.prepare('SELECT * FROM products').all();
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

app.post('/products', (req, res) => {
  const { name, description, image, price } = req.body;

  const stmt = db.prepare('INSERT INTO products (name, description, image, price) VALUES (?, ?, ?, ?)');
  const info = stmt.run(name, description, image, price);

  res.json({ id: info.lastInsertRowid });
});
