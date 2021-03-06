const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');
const cors = require('cors');

const sequelizeInit = require('./config/sequelize/init');
sequelizeInit()
    .catch(err => {
        console.log(err);
    });

//Midellwares
app.use(bodyParser.json());
app.use(cors())


require("./routes/client.routes")(app);
require("./routes/table.routes")(app);
require("./routes/reservation.routes")(app);

//Listeners
app.listen(9000, () => {
    console.log("Server is running on port 9000.");
});