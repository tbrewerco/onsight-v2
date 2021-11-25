require("dotenv").config({ path: './.env' });

const mysql = require('mysql2');
const migration = require('mysql-migrations');

const USER = process.env.DB_USER
const PASSWORD = process.env.DB_PASSWORD
const DATABASE = process.env.DB_NAME

const connection = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: `${USER}`,
    password: `${PASSWORD}`,
    database: `${DATABASE}`
});

migration.init(connection, __dirname + '/migrations');