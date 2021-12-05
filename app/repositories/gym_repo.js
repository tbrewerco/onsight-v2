const { connection, mysql } = require("../../db/index.js");

exports.findAllGyms = async () => {
    connection.getConnection(function (error) {
        if (error) throw (error);
    });
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM gyms;`;
        connection.query(sql, (error, result, fields) => {
            if (error) {
                return reject("db error: " + error.message);
            } else {
                return resolve(result);
            };
        });
    });
};