const { ValidationErrorItem, ValidationError } = require("sequelize");
const Client = require("../model/Client");
const Person = require("../model/Person");
const Reservation = require("../model/Reservation");
const Table = require("../model/Table");

exports.getReservationById = (reservationId) => {
    return Reservation.findByPk(reservationId,
        {
            include: [{
                model: Client,
                as: 'client',
                include: [{
                    model: Person,
                    as: 'person'
                }]
            }, {
                model: Table,
                as: 'table'
            }]
        });
};

exports.getReservations = () => {
    return Reservation.findAll({
        include: [{
            model: Client,
            as: 'client',
            include: [{
                model: Person,
                as: 'person'
            }]
        }]
    });
};

exports.addReservation = async (data) => {

    console.log(data.body);

    let errorsTable = [];

    if (data.body.table_id === "") errorsTable.push(new ValidationErrorItem("requiredTableNumber"));
    if (data.body.date === "") errorsTable.push(new ValidationErrorItem("requiredDate"));
    if (data.body.client_id === "") errorsTable.push(new ValidationErrorItem("requiredClient"));

    if (data.body.date.length !== 16) errorsTable.push(new ValidationErrorItem("dateValidation"));

    if (errorsTable.length > 0) throw new ValidationError("Wystąpiły błędy z zawartoscią pól", errorsTable);

    if (!/\b[0-9]+$\b/.test(data.body.table_id)) throw new ValidationError("Pole numer stolika powinno być liczbą", [new ValidationErrorItem("requiredTable")]);

    const client = await Client.findOne({
        where: {
            _id: data.body.client_id
        }
    });

    if (client === null) errorsTable.push(new ValidationErrorItem("requiredClient"));

    const table = await Table.findOne({
        where: {
            _id: data.body.table_id
        }
    });

    if (table === null) throw new ValidationError("Nie istnieje taki stolik", [new ValidationErrorItem("requiredTable")]);

    const reservation = await Reservation.findOne({
        where: {
            table_id: table._id,
            date: data.body.date
        }
    });

    if (reservation !== null) throw new ValidationError("Ta godzina jest już zajęta", [new ValidationErrorItem("dateValidation")])

    return await Reservation.create({
        date: data.body.date,
        table_id: table._id,
        client_id: data.body.client_id
    });


}

exports.updateReservation = async (data) => {

    const client = await Client.findOne({
        where: {
            _id: data.body.client_id
        }
    });

    if (client === null) throw new ValidationError("Taki klient nie istnieje", [new ValidationErrorItem("requiredClient")]);

    return await Reservation.update({ client_id: data.body.client_id, date: data.body.date, table_id: data.body.table_id }, { where: { _id: data.body._id } });
}

exports.deleteReservation = (reservationId) => {
    console.log(reservationId)
    return Reservation.destroy({
        where: { _id: reservationId }
    });
}

exports.getReservationsForTable = (tableId) => {
    return Reservation.findAll({
        where: { table_id: tableId },
        include: [{
            model: Client,
            as: 'client',
            include: [{
                model: Person,
                as: 'person'
            }]
        }]
    })
}
