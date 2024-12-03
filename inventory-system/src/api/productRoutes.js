const express = require('express');
const { addProduct, getProducts } = require('./productController');

const router = express.Router();

// Маршрут для отримання списку товарів
router.get('/', getProducts);

// Маршрут для додавання нового товару
router.post('/', addProduct);

module.exports = router;
