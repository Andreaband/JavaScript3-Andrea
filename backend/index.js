const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();
const path = require('path');

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.get('/products', (req, res) => {
  const products = db.prepare('SELECT * FROM products').all();
  res.json(products);
});
app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  const stmt = db.prepare('SELECT * FROM products WHERE id = ?');
  const product = stmt.get(id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Prodotto non trovato' });
  }
});

app.listen(3000, () => {
  console.log('🧠 DB in uso: ' + require('path').resolve('products.db'));
  console.log('Server listening on http://localhost:3000');
});
