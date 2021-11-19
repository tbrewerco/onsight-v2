const db = require("../models");
const Tick = db.ticks;
const User_tick = db.user_ticks;
const Op = db.Sequelize.Op;

// create tick
exports.create = async (req, res) => {
    try {
        const tick = await Tick.create({
            comment: req.body.comment,
            did_send: req.body.did_send,
            did_flash: req.body.did_flash,
            did_onsight: req.body.did_onsight,
            quality_rating: req.body.quality_rating,
            difficulty_grade: req.body.difficulty_grade,
            gym_id: req.body.gym_id,
            route_id: req.body.route_id,
            user_id: req.body.user_id,
        });
        // create row in user_ticks (join table) when tick created
        const tick_id = tick.id;
        const user_id = tick.user_id;
        const user_tick = await User_tick.create({
            user_id: user_id,
            tick_id: tick_id
        })
        res.status(200).send({ tick, user_tick });
    } catch (error) {
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

// delete tick
exports.delete = (req, res) => {
    try {
        Tick.destroy({
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
            message: "Error: tick not deleted"
        });
    };
};