const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Cart = sequelize.define('cart',{
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  }
});

module.exports = Cart;