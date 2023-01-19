const db = require("../../db/index.js");
const UserTick = db.userTicks;
const Op = db.Sequelize.Op;

// create user_tick
exports.create = async (req, res) => {
    try {
        const userTick = await UserTick.create({
            user_id: req.body.userId,
            tick_id: req.body.tickId,
        });
        res.send(userTick);
    } catch (error) {
        res.send({
            "Error": error
        });
    };
};

// get user_ticks by user_id or all user_ticks
exports.findAll = async (req, res) => {
    const id = req.params.id;
    // get user_tick by user_id
    if (id !== "null") {
        try {
            const userTicks = await UserTick.findAll({
                where: {
                    user_id: req.params.id
                }
            });
            // if no user_tick found, send error
            if (userTicks.length === 0) {
                res.send({
                    "Error": "No user_tick found by that user_id"
                });
            } else {
                res.send(userTicks);
            };
        } catch (error) {
            res.status(500).send("Controller error: " + error.message);
        };
        // or get ALL user_ticks
    } else {
        try {
            const allUserTicks = await UserTick.findAll();
            res.send(allUserTicks);
        } catch (error) {
            res.send(error)
        };
    };
};

// delete user_tick by user_tick_id
exports.delete = (req, res) => {
    try {
        UserTick.destroy({
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
        res.status(500).send({
            message: "Error: user_tick not deleted"
        });
    };
};