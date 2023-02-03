const db = require("../../db/index.js");
const Gym = db.gyms;
const ClimbingRoutes = db.climbingRoutes;
const Op = db.Sequelize.Op;

// create gym
exports.create = async (req, res) => {
    try {
        const gym = await Gym.create(req.body);
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
        const gym = await Gym.findOne({
            where: { id: req.params.id },
            include: [{
                model: ClimbingRoutes,
                as: 'climbing_routes'
            }]
        });
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