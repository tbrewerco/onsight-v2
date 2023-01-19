const db = require("../../db/index.js");
const Gym = db.gyms;
const Op = db.Sequelize.Op;

// create gym
exports.create = async (req, res) => {
    try {
        const gym = await Gym.create({
            name: req.body.name,
            address_street: req.body.addressStreet,
            address_city: req.body.addressCity,
            address_state: req.body.addressState,
            address_zip: req.body.addressZip,
            address_coordinates: {
                type: "Point",
                coordinates: req.body.addressCoordinates
            },
            has_boulders: req.body.hasBoulders,
            has_sport_routes: req.body.hasSportRoutes,
            has_auto_belays: req.body.hasAutoBelays,
            photo_url: req.body.photoUrl,
            created_by: req.body.createdBy
        });
        res.status(200).send(gym);
    } catch (error) {
        res.status(500).send("Controller error:" + error.message);
    };
};

// get all gyms
exports.findAll = async (req, res) => {
    try {
        const gyms = await Gym.findAll();
        res.status(200).send(gyms);
    } catch (error) {
        res.status(500).send("Controller error:" + error.message);
    };
};

// get a gym by Id
exports.findOne = async (req, res) => {
    try {
        const gym = await Gym.findByPk(req.params.id);
        if (gym === null) {
            throw error;
        } else {
            res.status(200).send(gym);
        };
    } catch (error) {
        res.status(500).send("Controller error:" + error.message);
    };
};

// update gym
exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        await Gym.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).send({
            message: "Updated successfully"
        });
    } catch (error) {
        res.status(500).send("Controller error:" + error.message);
    };
};

// delete gym
exports.delete = (req, res) => {
    try {
        Gym.destroy({
            where: { id: req.params.id }
        })
            .then(rowDeleted => {
                if (rowDeleted == 1) {
                    res.status(200).send({
                        message: "Deleted successfully"
                    });
                } else {
                    res.send({
                        message: "Cannot delete."
                    })
                }
            })
    } catch (error) {
        res.status(500).send("Controller error:" + error.message);
    };
};