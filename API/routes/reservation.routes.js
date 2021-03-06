module.exports = app => {
    const controller = require(`../controllers/reservation.controller`);

    app.get("/reservations/getReservations", (req, res, next) => {
        controller.getReservations()
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
            });
    });

    app.get("/reservations/getReservation/:reservationId", (req, res, next) => {
        controller.getReservationById(req.params.reservationId)
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
            });
    });

    app.get("/reservations/getReservationsForTable/:tableId", (req, res, next) => {
        controller.getReservationsForTable(req.params.tableId)
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
            });
    });

    app.post("/reservations/createReservation", async (req, res, next) => {
        controller.addReservation(req)
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                res.status(400).json(err.errors)
            });
    });

    app.post("/reservations/updateReservation", async (req, res, next) => {
        controller.updateReservation(req)
            .then(result => {
                res.status(200).json({ message: 'Reservation updated!', client: result });
            })
            .catch(err => {
                console.log(err)
                res.status(400).json(err.errors)
            });
    });

    app.delete("/reservations/deleteReservation/:reservationId", (req, res, next) => {
        console.log(req)
        controller.deleteReservation(req.params.reservationId)
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
            });
    });


};