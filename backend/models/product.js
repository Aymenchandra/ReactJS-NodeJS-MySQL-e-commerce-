const Sequelize = require('sequelize');
const sequelize = require('../database');

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: Sequelize.STRING,
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING(500),
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(500),
        allowNull: false
    }
});

module.exports = Product;
