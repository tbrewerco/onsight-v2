const dbConfig = require("../config/db_config.js");

const Seqeulize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbconfig.USER, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Seqeulize = Seqeulize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Seqeulize);

module.exports = db;

// const express = require('express');
// const mysql = require('mysql');
// const app = express();
// require('dotenv').config();

// const database = mysql.createConnection({
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

// app.get('/init', (req, res) => {
//     const sqlQuery = 'CREATE TABLE IF NOT EXISTS test_3(firstname VARCHAR(50))';

//     database.query(sqlQuery, (error) => {
//         if (error) throw error;
//         res.send('Table created!')
//     });
// });