const { connection, mysql } = require("../../db/index.js");

// get all
exports.findAll = async (tableName) => {
    connection.getConnection(function (error) {
        if (error) throw (error);
    });
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM ${tableName};`;
        connection.query(sql, (error, result, fields) => {
            if (error) {
                return reject("db error: " + error.message);
            } else {
                return resolve(result);
            };
        });
    });
};

// get all by attribute

// delete