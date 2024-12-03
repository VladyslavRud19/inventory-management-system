const db = require('../database');

// Додавання нового продукту
const addProduct = (req, res) => {
  const { name, quantity, price } = req.body;
  const query = 'INSERT INTO products (name, quantity, price) VALUES (?, ?, ?)';
  
  db.run(query, [name, quantity, price], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({
      id: this.lastID,
      name,
      quantity,
      price
    });
  });
};

// Отримання всіх продуктів
const getProducts = (req, res) => {
  const query = 'SELECT * FROM products';
  
  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
};

module.exports = {
  addProduct,
  getProducts
};
