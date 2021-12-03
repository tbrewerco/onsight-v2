const db = require("../..");
const User_favorite_gym = db.user_favorite_gyms;
const Op = db.Sequelize.Op;

// create user_favorite_gym
exports.create = async (req, res) => {
    try {
        const user_favorite_gym = await User_favorite_gym.create({
            user_id: req.body.user_id,
            gym_id: req.body.gym_id
        });
        res.status(200).send(user_favorite_gym);
    } catch (error) {
        res.send({
            "Error": error
        });
    };
};

// get all user_favorite_gyms by user_id
exports.findAll = async (req, res) => {
    try {
        const user_favorite_gyms = await User_favorite_gym.findAll({
            where: { user_id: req.params.id }
        });
        res.send(user_favorite_gyms);
    } catch (error) {
        res.send(error)
    };
};

// delete a user_favorite_gym or all of user's favorite gyms by user_id
exports.delete = (req, res) => {

    // successful status
    const didDelete = () => {
        res.status(200).send({
            message: "Deleted successfully"
        });
    };
    // unsuccessful status
    const didNotDelete = () => {
        res.send({
            message: "Cannot delete."
        });
    };

    try {
        // delete one user_favorite_gym by id
        if (req.params.id) {
            User_favorite_gym.destroy({
                where: { id: req.params.id }
            }).then(rowDeleted => {
                if (rowDeleted == 1) {
                    didDelete();
                } else {
                    didNotDelete();
                };
            });
        };
        // delete all of a user's favorite_gyms by user id
        if (req.params.user_id) {
            User_favorite_gym.destroy({
                where: { user_id: req.params.user_id }
            }).then(rowDeleted => {
                if (rowDeleted >= 1) {
                    didDelete();
                } else {
                    didNotDelete();
                };
            });
        };
    } catch (error) {
        res.status(500).send({
            message: "Error: user favorite not deleted", error
        });
    };
};