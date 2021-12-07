const { connection, mysql } = require("../../db/index.js");

exports.create = async (newGym) => {
    connection.getConnection(function (error) {
        if (error) throw (error);
    });
    return new Promise((resolve, reject) => {
        const sql = `
        INSERT INTO gyms SET
        name= ?,
        address_street= ?,
        address_city= ?,
        address_state= ?,
        address_zip= ?,
        address_coordinates=ST_PointFromText('POINT( ? ? )'),
        has_boulders= ?,
        has_sport_routes= ?,
        has_auto_belays= ?,
        photo_url= ?, 
        created_by= ?
        `;
        connection.query(sql,
            [
                newGym.name, newGym.addressStreet, newGym.addressCity, newGym.addressState, newGym.addressZip, newGym.addressCoordinates.x, newGym.addressCoordinates.y, newGym.hasBoulders, newGym.hasSportRoutes, newGym.hasAutoBelays, newGym.photoUrl, newGym.createdBy
            ],
            (error, result, fields) => {
                if (error) {
                    throw new Error("DB Error: " + error);
                } else {
                    return resolve(result.insertId);
                };
            });
    });
};

// update
exports.update = async (data, id) => {
    console.log(data.name)
    connection.getConnection(function (error) {
        if (error) throw (error);
    });
    return new Promise((resolve, reject) => {
        const sql = `
        UPDATE gyms SET
        name= ?,
        address_street= ?,
        address_city= ?,
        address_state= ?,
        address_zip= ?,
        has_boulders= ?,
        has_sport_routes= ?,
        has_auto_belays= ?,
        photo_url= ?, 
        created_by= ?
        WHERE id = ${id}
        `;
        connection.query(sql,
            [
                data.name, data.addressStreet, data.addressCity, data.addressState, data.addressZip, data.hasBoulders, data.hasSportRoutes, data.hasAutoBelays, data.photoUrl, data.createdBy
            ],
            (error, result, fields) => {
                if (error) {
                    throw new Error("DB Error: " + error);
                } else {
                    return resolve(result)
                };
            });
    });
};