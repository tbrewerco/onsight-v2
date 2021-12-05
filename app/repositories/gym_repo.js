const { connection, mysql } = require("../../db/index.js");

exports.create = async (newGym) => {
    connection.getConnection(function (error) {
        if (error) throw (error);
    });
    return new Promise((resolve, reject) => {
        // NEED TO SANITIZE (USE LIBRARY?)
        const sql = `
        INSERT INTO gyms SET
        name='${newGym.name}',
        address_street='${newGym.addressStreet}',
        address_city='${newGym.addressCity}',
        address_state='${newGym.addressState}',
        address_zip='${newGym.addressZip}',
        address_coordinates=ST_PointFromText('POINT(${newGym.addressCoordinates.x} ${newGym.addressCoordinates.y})'),
        has_boulders='${newGym.hasBoulders}',
        has_sport_routes='${newGym.hasSportRoutes}',
        has_auto_belays='${newGym.hasAutoBelays}',
        ${newGym.photoUrl ? `photo_url='${newGym.photoUrl}', created_by='${newGym.createdBy}'` : `created_by=${newGym.createdBy}`}
        `;
        connection.query(sql, (error, result, fields) => {
            if (error) {
                throw new Error("DB Error: " + error.code);
            } else {
                return resolve(result.insertId);
            };
        });
    });
};

// update