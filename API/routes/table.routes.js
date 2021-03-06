module.exports = app => {
    const controller = require(`../controllers/table.controller`);

    app.get("/tables/getTables", (req, res, next) => {
        controller.getTables()
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
            });
    });

    app.get("/tables/getTable/:tableId", (req, res, next) => {
        controller.getTableById(req.params.tableId)
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
            });
    });

    app.post("/tables/createTable", (req, res, next) => {
        controller.addTable(req)
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                err.errors.forEach(e => {
                    if (e.type == 'unique violation') {
                        e.message = "Stolik o tym numerze już istnieje";
                    }
                });
                res.status(400).json(err.errors)
            });
    });


    app.post("/tables/updateTable", (req, res, next) => {
        controller.updateTable(req)
            .then(result => {
                res.status(200).json({ message: 'Table updated!', table: result });
            })
            .catch(err => {
                err.errors.forEach(e => {
                    if (e.type == 'unique violation') {
                        e.message = "Stolik o tym numerze już istnieje";
                    }
                });
                res.status(400).json(err.errors)
            });
    });

    app.delete("/tables/deleteTable/:tableId", (req, res, next) => {
        controller.deleteTable(req.params.tableId)
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
            });
    });


};