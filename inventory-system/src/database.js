const sqlite3 = require('sqlite3').verbose();

// Створення або відкриття бази даних
const db = new sqlite3.Database('./inventory.db', (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Database connected');
  }
});

// Створення таблиці для продуктів (якщо вона не існує)
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      quantity INTEGER,
      price REAL
    );
  `);
});

module.exports = db;
