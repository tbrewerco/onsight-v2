const { connection, mysql } = require("../../db/index.js");

exports.findAll = async (tableName) => {
    connection.getConnection(function (error) {
        if (error) throw (error);
    });
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM ${tableName};`;
        const allowedTables = ["climbing_routes", "gym_wall_sections", "gyms", "route_tags", "ticks"];
        if (allowedTables.includes(tableName)) {
            connection.execute(sql, [tableName], (error, result, fields) => {
                if (error) {
                    return reject("db error: " + error.message);
                } else {
                    return resolve(result);
                };
            });
        } else {
            throw new Error("db error: invalid query");
        };
    });
};

exports.findByAttribute = async (tableName, attribute, reqParams) => {
    const allowedTables = ["climbing_routes", "gym_wall_sections", "gyms", "route_tags", "ticks", "user_favorite_gyms", "user_favorite_routes", "user_ticks"];
    if (allowedTables.includes(tableName)) {
        connection.getConnection(function (error) {
            if (error) throw (error);
        });
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM ?? WHERE ?? = ?;`;
            connection.query(sql, [tableName, attribute, reqParams], (error, result) => {
                if (error) {
                    return reject("db error: " + error.message);
                } else {
                    return resolve(result);
                };
            });
        });
    } else {
        throw new Error("db error: invalid query");
    };
};

exports.delete = async (tableName, id) => {
    connection.getConnection(function (error) {
        if (error) throw (error);
    });
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM ?? WHERE id = ?;`;
        const allowedTables = ["climbing_routes", "gym_wall_sections", "gyms", "route_tags", "ticks", "user_favorite_gyms", "user_favorite_routes", "user_ticks"];
        if (allowedTables.includes(tableName)) {
            connection.query(sql, [tableName, id], (error, result, fields) => {
                if (error) {
                    return reject("db error: " + error.message);
                } else {
                    return resolve(result);
                };
            });
        } else {
            throw new Error("db error: invalid query");
        };
    });
};