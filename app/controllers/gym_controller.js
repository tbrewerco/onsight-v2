const Gym = require("../models/gym_model.js");

exports.create = async (req, res) => {
    try {
        const data = req.body;
        const newGym = new Gym(data);
        const gym = await newGym.create(newGym);
        res.status(200).send(gym);
    } catch (error) {
        throw new Error("Controller error:" + error.message);
    };
};

exports.findAll = async (req, res) => {
    try {
        const reqQuery = req.query;
        const gyms = await Gym.findAll(reqQuery);
        res.send(gyms);
    } catch (error) {
        throw new Error("Controller error:" + error.message);
    };
};

exports.findOne = async (req, res) => {
    try {
        const reqParams = req.params.id;
        const gym = await Gym.findOne(reqParams);
        res.send(gym);
    } catch (error) {
        throw new Error("Controller error:" + error.message);;
    };
};

// exports.update = async (req, res) => {
//     const id = req.params.id;
//     try {
//         await Gym.update(req.body, {
//             where: { id: req.params.id }
//         });
//         res.status(200).send({
//             message: "Updated successfully"
//         });
//     } catch (error) {
//         res.send(error);
//     };
// };

// exports.delete = (req, res) => {
//     try {
//         Gym.destroy({
//             where: { id: req.params.id }
//         })
//             .then(rowDeleted => {
//                 if (rowDeleted == 1) {
//                     res.status(200).send({
//                         message: "Deleted successfully"
//                     });
//                 } else {
//                     res.send({
//                         message: "Cannot delete."
//                     })
//                 }
//             })
//     } catch (error) {
//         res.status(500).send({
//             message: "Error: gym not deleted"
//         });
//     };
// };