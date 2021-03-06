const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize/sequelize');

function dateNowFunction() {
    var currentdate = new Date();
    var year = currentdate.getFullYear();
    var month = currentdate.getMonth() + 1;
    var day = currentdate.getDate();
    return [year,
        (month > 9 ? '' : '0') + month,
        (day > 9 ? '' : '0') + day
    ].join('-') + ' ' + currentdate.getHours() + ':' + currentdate.getMinutes();
}

const Reservation = sequelize.define('Reservation', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "requiredDate"
            },
            isDate: {
                args: true,
                msg: "dateValidation"
            },
            isAfter: {
                args: dateNowFunction(),
                msg: "dateIsAfter"
            }
        },
        client_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Id klienta jest wymagane"
                },
                is: {
                    args: /\b[0-9]+$\b/i,
                    msg: "Id klienta powinno być liczbą"
                }
            }
        },
        table_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Id stolika jest wymagane"
                },
                is: {
                    args: /\b[0-9]+$\b/i,
                    msg: "Id stolika powinno być liczbą"
                }
            }
        }
    }
});

module.exports = Reservation;