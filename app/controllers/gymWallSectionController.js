const db = require("../../db/index.js");
const GymWallSection = db.gymWallSection;
const Op = db.Sequelize.Op;

// create gym wall section
exports.create = async (req, res) => {
    try {
        const gymWallSection = await GymWallSection.create({
            name: req.body.name,
            gym_id: req.body.gym_id
        });
        res.send(gymWallSection);
    } catch (error) {
        res.send({
            "Error": error
        });
    };
};

// get all gym wall sections
exports.findAll = async (req, res) => {
    try {
        const gymWallSections = await GymWallSection.findAll();
        res.send(gymWallSections);
    } catch (error) {
        res.send(error)
    };
};

// get a gym wall section by Id
exports.findOne = async (req, res) => {
    try {
        const gymWallSection = await GymWallSection.findByPk(req.params.id);
        if (gymWallSection === null) {
            throw error;
        } else {
            res.send(gymWallSection)
        };
    } catch (error) {
        res.send({
            message: "No wall section found"
        });
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
        res.send(error);
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
        res.status(500).send({
            message: "Error: wall section not deleted"
        });
    };
};