const { connection, mysql } = require("../../db/index.js");

const allTables = [
    climbingRoutesTable = "climbing_routes",
    gymWallSectionsTable = "gym_wall_sections",
    gymsTable = "gyms",
    routeTagsTable = "route_tags",
    ticksTable = "ticks",
    userFavoriteGymsTable = "user_favorite_gyms",
    userFavoriteRoutesTable = "user_favorite_routes",
    userTicksTable = "user_ticks",
    usersTable = "users"
];

const allowedTables = [
    climbingRoutesTable,
    gymWallSectionsTable,
    gymsTable,
    routeTagsTable,
    ticksTable,
    userFavoriteGymsTable,
    userFavoriteRoutesTable,
    userTicksTable
];

exports.findAll = async (tableName) => {
    connection.getConnection(function (error) {
        if (error) throw (error);
    });
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM ${tableName};`;
        if (allowedTables.includes(tableName)) {
            connection.execute(sql, [tableName], (error, result, fields) => {
                if (error) {
                    return reject("db error: " + error.message);
                } else {
                    return resolve(result);
                };
            });
        } else {
            throw new Error(`db error: unknown table name ${tableName}`);
        };
    });
};

exports.findByAttribute = async (tableName, attribute, reqParams) => {
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