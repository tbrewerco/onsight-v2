const db = require("../..");
const User_tick = db.user_ticks;
const Op = db.Sequelize.Op;

// create user_tick
exports.create = async (req, res) => {
    try {
        const user_tick = await User_tick.create({
            user_id: req.body.user_id,
            tick_id: req.body.tick_id,
        });
        res.send(user_tick);
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
                const user_ticks = await User_tick.findAll({
                    where: {
                    user_id: req.params.id
                    }
            });
                // if no user_tick found, send error
                if (user_ticks.length === 0) {
                    res.send({
                        "Error": "No user_tick found by that user_id"
                    });
                } else {
                    res.send(user_ticks);
                };
        } catch (error) {
        res.send(error);
      };
    // or get ALL user_ticks
    } else {
        try {
                const all_user_ticks = await User_tick.findAll();
                res.send(all_user_ticks);
        } catch (error) {
        res.send(error)
    };
    };
};

// delete user_tick by user_tick_id
exports.delete = (req, res) => {
    try {
        User_tick.destroy({
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