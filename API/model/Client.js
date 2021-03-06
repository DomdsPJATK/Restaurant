const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize/sequelize');

const Client = sequelize.define('Client', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: false,
        allowNull: false,
        primaryKey: true,
    },
    phoneNumber: {
        type: Sequelize.STRING(9),
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "requiredPhoneNumber"
            },
            validatePhone: function (value) {
                if (!/\b[0-9]{9}\b/i.test(value))
                    throw new Error("phoneValidation");

            }
        }
    }
});

module.exports = Client;