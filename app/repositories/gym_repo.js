const { connection, mysql } = require("../../db/index.js");

const sqlReturnObject = {
    name: "name= ?,",
    addressStreet: "address_street= ?,",
    addressCity: "address_city= ?,",
    addressState: "address_state= ?,",
    addressZip: "address_zip= ?,",
    addressCoordinates: "address_coordinates=ST_PointFromText('POINT( ? ? )'),",
    hasBoulders: "has_boulders= ?,",
    hasSportRoutes: "has_sport_routes= ?,",
    hasAutoBelays: "has_auto_belays= ?,",
    photoUrl: "photo_url= ?,",
    createdBy: "created_by= ?,",
    isDeleted: "is_deleted= ?"
};

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


exports.update = async (data, id) => {

    const getSqlQuery = () => {
        let sqlArray = [];
        Object.keys(data).map(prop => {
            sqlArray.push(sqlReturnObject[prop])
        });
        return sqlArray.join('\n').replace(/,\s*$/, "");
    };

    const sql = `UPDATE gyms SET ${getSqlQuery()} WHERE id = ?;`

    return new Promise((resolve, reject, sqlQuery) => {
        connection.query(sql,
            // need to dynamically populate this array
            [
                data.name, data.addressStreet, data.addressCoordinates.x, data.addressCoordinates.y, data.hasBoulders, data.hasSportRoutes, data.hasAutoBelays, data.createdBy, id
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