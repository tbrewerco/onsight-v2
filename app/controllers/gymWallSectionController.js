const db = require("../../db/index.js");
const GymWallSection = db.gymWallSections;
const Op = db.Sequelize.Op;

// create gym wall section
exports.create = async (req, res) => {
    try {
        const gymWallSection = await GymWallSection.create(req.body);
        res.status(200).send(gymWallSection);
    } catch (error) {
        res.send("Controller error: " + error.message)
    };
};

// get all gym wall sections
exports.findAll = async (req, res) => {
    try {
        const gymWallSections = await GymWallSection.findAll();
        res.status(200).send(gymWallSections);
    } catch (error) {
        res.send("Controller error: " + error.message)
    };
};

// get a gym wall section by Id
exports.findOne = async (req, res) => {
    try {
        const gymWallSection = await GymWallSection.findByPk(req.params.id);
        if (gymWallSection === null) {
            throw error;
        } else {
            res.status(200).send(gymWallSection);
        };
    } catch (error) {
        res.send("Controller error: " + error.message)
    };
};

// update gym wall section
exports.update = async (req, res) => {
    try {
        await GymWallSection.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).send({
            message: "Updated successfully"
        });
    } catch (error) {
        res.send("Controller error: " + error.message)
    };
};

// delete gym wall section
exports.delete = (req, res) => {
    try {
        GymWallSection.destroy({
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
                    });
                };
            });
    } catch (error) {
        res.send("Controller error: " + error.message)
    };
};