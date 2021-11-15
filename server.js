// .env
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// dependencies/imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const corsOptions = {
    origin: "http://localhost:3001"
};

// middleware

// cors
app.use(cors(corsOptions));
// parse requests of content-type application/json
app.use(bodyParser.json());
// parse requests of content-type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// call sync()
const db = require("./app/models");
db.sequelize.sync();

// test route
app.get("/", (req, res) => {
    res.send("Welcome to Onsight");
});

// set port and listen for requests
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
