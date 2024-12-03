// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// API маршрут для отримання продуктів
app.get('/api/products', (req, res) => {
    const products = [
        { id: 1, name: 'Product 1', quantity: 10, price: 100 },
        { id: 2, name: 'Product 2', quantity: 5, price: 200 },
        { id: 3, name: 'Product 3', quantity: 20, price: 150 }
    ];
    res.json(products);
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

