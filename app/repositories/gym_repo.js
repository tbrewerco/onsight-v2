const { sequelize } = require("../..");

exports.create = async (newGym) => {
    try {
        const [gymId, metadata] = await sequelize.query(
            `
            INSERT INTO gyms SET
            name='${newGym.name}',
            address_street='${newGym.addressStreet}',
            address_city='${newGym.addressCity}',
            address_state='${newGym.addressState}',
            address_zip='${newGym.addressZip}',
            address_coordinates=ST_PointFromText('POINT(${newGym.addressCoordinates.lat} ${newGym.addressCoordinates.long})'),
            has_boulders='${newGym.hasBoulders}',
            has_sport_routes='${newGym.hasSportRoutes}',
            has_auto_belays='${newGym.hasAutoBelays}'
            `
        );
        newGym.gymId = gymId;
        return newGym;
    } catch (error) {
        throw new Error("db error: " + error.message);
    };
};

exports.findAllGyms = async () => {
    try {
        const [gyms, metadata] = await sequelize.query(`SELECT * FROM gyms`);
        return gyms;
    } catch (error) {
        throw new Error("db error: " + error.message);
    };
};

exports.findGymById = async (gymId) => {
    try {
        const [gym, metadata] = await sequelize.query(
            `SELECT * FROM gyms WHERE id = ${gymId};`
        );
        return gym;
    } catch (error) {
        throw new Error(gym.length < 1 ? "Gym not found" : error.message);
    }
}