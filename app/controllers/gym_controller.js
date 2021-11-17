const db = require("../models");
const Gym = db.gyms;
const Op = db.Sequelize.Op;

// create gym
exports.create = async (req, res) => {
    try {
        const gym = await Gym.create({
            name: req.body.name,
            address_street: req.body.address_street,
            address_city: req.body.address_city,
            address_state: req.body.address_state,
            address_zip: req.body.address_zip,
            address_coordinates: req.body.address_coordinates,
            has_boulders: req.body.has_boulders,
            has_sport_routes: req.body.has_sport_routes,
            has_auto_belays: req.body.has_auto_belays,
            photo_url: req.body.photo_url,
            created_by: req.body.created_by
        });
        res.send(gym);
    } catch (error) {
        res.send({
            "Error": error
        });
    };
};