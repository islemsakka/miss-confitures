const express = require('express');
const bodyParser = require('body-parser');


const app = express();




app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: '*/*' }));

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


const EventRoute = require("./app/routes/event.routes");
EventRoute(app);

const ProductRoute = require("./app/routes/product.routes");
ProductRoute(app);

const UserRoute = require("./app/routes/user.routes");
UserRoute(app);





app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});







