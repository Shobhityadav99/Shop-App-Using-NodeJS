const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'shobhit', { dialect: 'mysql', host: 'localhost',port: '6900' });

module.exports = sequelize;