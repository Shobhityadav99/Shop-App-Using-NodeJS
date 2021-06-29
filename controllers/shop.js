const Product = require('../models/product');


exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products)=>{
      res.render('shop/products-list', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
    });
  };