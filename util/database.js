const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-project', 'root', '', { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;