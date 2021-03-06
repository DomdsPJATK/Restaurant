const Client = require("../model/Client");
const Person = require("../model/Person");
const Reservation = require("../model/Reservation");
const Table = require("../model/Table");

exports.getTableById = (tableId) => {
    return Table.findByPk(tableId,
        {
            include: [{
                model: Reservation,
                as: 'reservations',
                include: [{
                    model: Client,
                    as: 'client',
                    include: [{
                        model: Person,
                        as: 'person'
                    }]
                }]
            }]
        });
};

exports.getTables = () => {
    return Table.findAll();
};

exports.updateTable = (data) => {
    return Table.update({ tableNumber: data.body.tableNumber, seats: data.body.seats, isSterilized: data.body.isSterilized }, { where: { _id: data.body._id } });
}

exports.addTable = (data) => {
    return Table.create({
        seats: data.body.seats,
        tableNumber: data.body.tableNumber,
        isSterilized: data.body.isSterilized
    });
}

exports.deleteTable = (tableId) => {
    return Table.destroy({
        where: { _id: tableId }
    });
}