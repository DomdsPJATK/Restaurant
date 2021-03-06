const Sequelize = require('sequelize');

const sequelize = new Sequelize('TinRestaurant', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    timezone: 'Poland'
});

module.exports = sequelize;