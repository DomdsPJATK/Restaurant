const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize/sequelize');

const Table = sequelize.define('Table', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    seats: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "requiredSeats"
            },
            isNumeric: {
                args: true,
                msg: "isNumberTableSeats"
            },
            max: {
                args: 10,
                msg: "max_10"
            },
            min: {
                args: 1,
                msg: "min_1"
            }
        }
    },
    isSterilized: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "requiredSterilization"
            }
        }
    },
    tableNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "requiredTableNumber"
            },
            is: {
                args: /\b[0-9]+$\b/i,
                msg: "isNumberTableNumber"
            }
        }
    }
});

module.exports = Table;