const db = require("../../db/index.js");
const User = db.users;
const Ticks = db.ticks;
const Op = db.Sequelize.Op;

// create user
exports.create = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.send(user);
    } catch (error) {
        res.status(500).send("Controller error: " + error.message);

    };
};

// get all users
exports.findAll = async (req, res) => {
    try {
        const users = await User.findAll();
        res.send(users);
    } catch (error) {
        res.send(error)
    };
};

// get a user by Id
exports.findOne = async (req, res) => {
    try {
        const user = await User.findOne({
            where: { id: req.params.id },
            include: [{
                model: Ticks,
                as: 'ticks'
            }]
        });
        if (user === null) {
            throw error;
        } else {
            res.send(user)
        };
    } catch (error) {
        console.log(error);
        res.send({
            "Error": "No user found"
        });
    };
};

// update user
exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        await User.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).send({
            message: "Updated successfully"
        });
    } catch (error) {
        res.status(500).send("Controller error: " + error.message);
    };
};

// delete user
exports.delete = (req, res) => {
    try {
        User.destroy({
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
        res.status(500).send("Controller error: " + error.message);
    };
};