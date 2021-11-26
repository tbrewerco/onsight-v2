require("dotenv").config({ path: './.env' });

const mysql = require("mysql2");
const fs = require("fs");
const bcrypt = require("bcrypt");
const jsSeedQuery = require("./seed.js");

// .env variables
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const DATABASE = process.env.DB_NAME;

// connect to database
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: `${USER}`,
    password: `${PASSWORD}`,
    database: `${DATABASE}`,
    multipleStatements: true
});

connection.connect();

// generate random password
const password = Math.random()
    .toString(36)
    .substring(2)
const hash = bcrypt.hashSync(password, 10);

console.log("running SQL seed... ... ...")

// seed query variables 
const gym = jsSeedQuery.gym;
const climbing_route = jsSeedQuery.climbing_route;
const tick = jsSeedQuery.tick;
const user = jsSeedQuery.user;

// run sql seed query from seed.js (jsSeedQuery)
connection.query(jsSeedQuery, [hash], error => {
    if (error) {
        throw error
    };
    connection.end();
    console.log(`Seed complete.`);
});