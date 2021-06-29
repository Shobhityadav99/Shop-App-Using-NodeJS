const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getindex);

router.get('/products',shopController.getProducts);
router.get('/cart',shopController.getCart);
router.get('/checkout',shopController.getCheckOut);

module.exports = router;