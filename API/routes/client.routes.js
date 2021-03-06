module.exports = app => {
    const controller = require(`../controllers/client.controller`);

    app.get("/clients/getClients", (req, res, next) => {
        controller.getClients()
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
            });
    });

    app.get("/clients/getClient/:clientId", (req, res, next) => {
        controller.getClientById(req.params.clientId)
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
            });
    });

    app.post("/clients/createClient", (req, res, next) => {
        controller.addClient(req)
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                err.errors.forEach(e => {
                    if (e.type == 'unique violation') {
                        e.message = "Klient o tym numerze już istnieje";
                    }
                });
                res.status(400).json(err.errors)
            });
    });

    app.post("/clients/updateClient", (req, res, next) => {
        controller.updateClient(req)
            .then(result => {
                res.status(200).json({ message: 'Client updated!', client: result });
            })
            .catch(err => {
                err.errors.forEach(e => {
                    if (e.type == 'unique violation') {
                        e.message = "Istnieje juz klient o tym numerze telefonu";
                    }
                });
                res.status(400).json(err.errors)
            });
    });

    app.delete("/clients/deleteClient/:clientId", (req, res, next) => {
        controller.deleteClient(req.params.clientId)
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
            });
    });

    app.get("/clients/clientReservationsForTable/:tableId", (req, res, next) => {
        controller.getClientReservationsForTable(req.params.tableId)
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
            });
    });



};