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

exports.getindex = (req, res, next) => {
  const products = Product.fetchAll((products)=>{
    res.render('shop/index', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products',
    });
  });
};

exports.getCart = (req,res,next) => {
  res.render('shop/cart',{
    path: '/cart',
    pageTitle: 'Your Cart'
  })
};

exports.getCheckOut = (req,res,next) => {
  res.render('shop/checkout',{
    path: '/checkout',
    pageTitle: 'Checkout'
  })
}