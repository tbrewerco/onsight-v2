const { sequelize } = require("../models");

exports.create = async (newGym) => {
    try {
        const gym = {
            name: newGym.name,
            addressStreet: newGym.addressStreet,
            addressCity: newGym.addressCity,
            addressState: newGym.addressState,
            addressZip: newGym.addressZip,
            addressCoordinates: newGym.addressCoordinates,
            hasBoulders: newGym.hasBoulders,
            hasSportRoutes: newGym.hasSportRoutes,
            hasAutoBelays: newGym.hasAutoBelays,
            photoUrl: newGym.photoUrl,
            createdBy: newGym.createdBy,
            createdAt: newGym.createdAt
        };
        const [gymId, metadata] = await sequelize.query(
            `
            INSERT INTO gyms SET
            name='${gym.name}',
            address_street='${gym.addressStreet}',
            address_city='${gym.addressCity}',
            address_state='${gym.addressState}',
            address_zip='${gym.addressZip}',
            address_coordinates=ST_PointFromText('POINT(${gym.addressCoordinates.lat} ${gym.addressCoordinates.long})'),
            has_boulders='${gym.hasBoulders}',
            has_sport_routes='${gym.hasSportRoutes}',
            has_auto_belays='${gym.hasAutoBelays}'
            `
        );
        return ({ gym, gymId });
    } catch (error) {
        throw new Error("db error: " + error.message);
    };
};

exports.findAll = async () => {
    const [results, metadata] = await sequelize.query("SELECT * FROM gyms");
    return results;
}