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

// get all gyms
exports.findAll = async (req, res) => {
    try {
        const gyms = await Gym.findAll();
        res.send(gyms);
    } catch (error) {
        res.send(error)
    };
};

// get a gym by Id
exports.findOne = async (req, res) => {
    try {
        const gym = await Gym.findByPk(req.params.id);
        if (gym === null) {
            throw error;
        } else {
            res.send(gym)
        };
    } catch (error) {
        res.send({
            "Error": "No gym found"
        });
    };
};

// update user
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
        res.send(error);
    };
};

// // delete user
// exports.delete = (req, res) => {
//     try {
//         User.destroy({
//             where: { id: req.params.id }
//         })
//             .then(rowDeleted => {
//                 if (rowDeleted == 1) {
//                     res.status(200).send({
//                         message: "Deleted successfully"
//                     });
//                 } else {
//                     res.send({
//                         message: "Cannot delete. Possibly not found"
//                     })
//                 }
//             })
//     } catch (error) {
//         res.status(500).send({
//             message: "Error: user not deleted"
//         });
//     };
// };