const { connection, mysql } = require("../../db/index.js");

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

exports.findByAttribute = async (tableName, attribute, reqParams) => {
    connection.getConnection(function (error) {
        if (error) throw (error);
    });
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM ${tableName} WHERE ${attribute} = ?;`;
        connection.query(sql, [
            reqParams
        ], (error, result) => {
            if (error) {
                return reject("db error: " + error.message);
            } else {
                return resolve(result);
            };
        });
    });
};

// delete