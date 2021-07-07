const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'shobhit', { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;