const Client = require("../model/Client");
const Person = require("../model/Person");
const Reservation = require("../model/Reservation");
const Table = require("../model/Table");

exports.getClientById = (clientId) => {
    return Client.findByPk(clientId,
        {
            include: [{
                model: Person,
                as: 'person'
            }, {
                model: Reservation,
                as: 'reservations',
                include: [{
                    model: Table,
                    as: 'table'
                }]
            }]
        })
}


exports.getClients = () => {
    return Client.findAll({
        include: [
            {
                model: Person,
                as: 'person'
            }
        ]
    });
};

exports.addClient = (data) => {
    return Client.create({
        phoneNumber: data.body.phoneNumber,
        person: {
            firstName: data.body.firstName,
            surName: data.body.surName
        }
    }, {
        include: [{ model: Person, as: 'person' }]
    });
}

exports.updateClient = async (data) => {
    await Person.update({ firstName: data.body.firstName, surName: data.body.surName }, { where: { _id: data.body._id } });

    return await Client.update({ phoneNumber: data.body.phoneNumber }, { where: { _id: data.body._id }, include: [{ model: Person, as: 'person' }] });
}


exports.deleteClient = (clientId) => {
    return Person.destroy({
        where: { _id: clientId }
    });
}

exports.getClientReservationsForTable = (tableId) => {
    return Client.findAll({
        include: [{
            model: Person,
            as: 'person'
        }]
    }, {
        include: [{
            model: Reservation,
            as: 'reservations',
            where: { table_id: tableId }
        }]
    });
}
