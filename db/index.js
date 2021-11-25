require("dotenv").config({ path: './.env' });

const mysql = require("mysql2");
const fs = require("fs");
const bcrypt = require("bcrypt");
const jsSeedQuery = require("./seed.js")

// .env variables
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const DATABASE = process.env.DB_NAME;

// read sql seed query
// const sqlSeedQuery = fs.readFileSync("db/seed.sql", {
//     encoding: "utf-8"
// })

// connect to database
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: `${USER}`,
    password: `${PASSWORD}`,
    database: `${DATABASE}`,
    multipleStatements: true
});

connection.connect();

// generate random password for an admin user
const password = Math.random()
    .toString(36)
    .substring(2)
const hash = bcrypt.hashSync(password, 10);

console.log("running SQL seed... ... ...")

// run sql seed query from seed.js (sqlSeedQuery) or seed.sql (jsSeedQuery)
connection.query(jsSeedQuery, [hash], error => {
    if (error) {
        throw error
    };
    console.log(`Seed complete. Password for initial acct: ${password}`);
    connection.end();
});