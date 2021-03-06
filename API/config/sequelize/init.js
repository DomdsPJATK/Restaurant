const sequelize = require('./sequelize');

const Client = require('../../model/Client');
const Table = require('../../model/Table');
const Person = require('../../model/Person');
const Reservation = require('../../model/Reservation');

module.exports = () => {
    Person.hasOne(Client, { as: 'client', foreignKey: { name: '_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Client.belongsTo(Person, { as: 'person', foreignKey: { name: '_id', targetKey: '_id', allowNull: false } });
    Client.hasMany(Reservation, { as: 'reservations', foreignKey: { name: 'client_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Reservation.belongsTo(Client, { as: 'client', foreignKey: { name: 'client_id', allowNull: false } });
    Table.hasMany(Reservation, { as: 'reservations', foreignKey: { name: 'table_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Reservation.belongsTo(Table, { as: 'table', foreignKey: { name: 'table_id', allowNull: false } });

    let allPerson, allTable, allClient;
    return sequelize
        .sync({ force: true })
        .then(() => {
            return Person.findAll();
        })
        .then(persons => {
            if (!persons || persons.length == 0) {
                return Person.bulkCreate([
                    { firstName: 'Jan', surName: 'Kowalski' },
                    { firstName: 'Adam', surName: 'Zieliński' },
                    { firstName: 'Marian', surName: 'Nowak' },
                ])
                    .then(() => {
                        return Person.findAll();
                    });
            } else {
                return persons;
            }
        })
        .then(persons => {
            allPerson = persons;
            return Client.findAll();
        })
        .then(clients => {
            if (!clients || clients.length == 0) {
                return Client.bulkCreate([
                    { _id: allPerson[0]._id, phoneNumber: '554933214' },
                    { _id: allPerson[1]._id, phoneNumber: '323211323' },
                    { _id: allPerson[2]._id, phoneNumber: '660572372' }
                ])
                    .then(() => {
                        return Client.findAll();
                    });
            } else {
                return clients;
            }
        })
        .then(clients => {
            allClient = clients;
            return Table.findAll();
        })
        .then(tables => {
            if (!tables || tables.length == 0) {
                return Table.bulkCreate([
                    { seats: 5, isSterilized: 0, tableNumber: 1 },
                    { seats: 2, isSterilized: 0, tableNumber: 2 },
                    { seats: 7, isSterilized: 1, tableNumber: 3 },
                ])
                    .then(() => {
                        return Table.findAll();
                    });
            } else {
                return tables;
            }
        })
        .then(tables => {
            allTable = tables;
            return Reservation.findAll();
        })
        .then(reservations => {
            if (!reservations || reservations.length == 0) {
                return Reservation.bulkCreate([
                    { client_id: allClient[0]._id, table_id: allTable[0]._id, date: '2020-01-20 11:30:00' },
                    { client_id: allClient[2]._id, table_id: allTable[0]._id, date: '2020-01-20 17:20:00' },
                    { client_id: allClient[1]._id, table_id: allTable[1]._id, date: '2020-01-21 18:30:00' },
                    { client_id: allClient[0]._id, table_id: allTable[1]._id, date: '2020-01-25 10:30:00' },
                ]);
            } else {
                return reservations;
            }
        });
};