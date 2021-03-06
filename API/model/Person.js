const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize/sequelize');

const Person = sequelize.define('Person', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    firstName: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "requiredPhoneNumber"
            },
            len: {
                args: [3, 20],
                msg: "lenName_3_20"
            },
            isAlpha: {
                args: true,
                msg: "patternName"
            }
        }
    },
    surName: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "requiredSurname"
            },
            len: {
                args: [3, 20],
                msg: "lenSurname_3_20"
            },
            isAlpha: {
                args: true,
                msg: "patternSurname"
            }
        }
    },
});

module.exports = Person;