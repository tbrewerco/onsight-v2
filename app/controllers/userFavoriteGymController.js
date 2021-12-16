const db = require("../../db/index.js");
const UserFavoriteGym = db.userFavoriteGym;
const Op = db.Sequelize.Op;

// create user_favorite_gym
exports.create = async (req, res) => {
    try {
        const userFavoriteGym = await UserFavoriteGym.create({
            user_id: req.body.user_id,
            gym_id: req.body.gym_id
        });
        res.status(200).send(UserFavoriteGym);
    } catch (error) {
        res.send({
            "Error": error
        });
    };
};

// get all user_favorite_gyms by user_id
exports.findAll = async (req, res) => {
    try {
        const userFavoriteGyms = await UserFavoriteGym.findAll({
            where: { user_id: req.params.id }
        });
        res.send(userFavoriteGyms);
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
            UserFavoriteGym.destroy({
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
            UserFavoriteGym.destroy({
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