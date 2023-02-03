const db = require("../../db/index.js");
const Tick = db.ticks;
const UserTick = db.userTicks;
const Op = db.Sequelize.Op;

// create tick
exports.create = async (req, res) => {
    try {
        const tick = await Tick.create(req.body);
        res.status(200).send(tick);
    } catch (error) {
        console.log(error);
        res.send({
            "Error": error
        });
    };
};

// get all ticks
exports.findAll = async (req, res) => {
    try {
        const ticks = await Tick.findAll();
        res.send(ticks);
    } catch (error) {
        res.send(error)
    };
};

// get a tick by Id
exports.findOne = async (req, res) => {
    try {
        const tick = await Tick.findByPk(req.params.id);
        if (tick === null) {
            throw error;
        } else {
            res.send(tick)
        };
    } catch (error) {
        res.send({
            message: "No tick found"
        });
    };
};

// update tick
exports.update = async (req, res) => {
    try {
        await Tick.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).send({
            message: "Updated successfully"
        });
    } catch (error) {
        res.send(error);
    };
};

// delete a tick by id
exports.delete = (req, res) => {
    const tickId = req.params.id;
    try {
        Tick.destroy({
            where: { id: tickId }
        }).then(rowDeleted => {
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
            message: "Error: tick not deleted"
        });
    };
};