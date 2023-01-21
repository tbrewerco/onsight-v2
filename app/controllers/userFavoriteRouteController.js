const db = require("../../db/index.js");
const UserFavoriteRoute = db.userFavoriteRoutes;
const Op = db.Sequelize.Op;

// create user_favorite_route
exports.create = async (req, res) => {
    try {
        const userFavoriteRoute = await UserFavoriteRoute.create(req.body);
        res.status(200).send(userFavoriteRoute);
    } catch (error) {
        res.send({
            "Error": error
        });
    };
};

// get all user_favorite_routes by user_id
exports.findAll = async (req, res) => {
    try {
        const userFavoriteRoutes = await UserFavoriteRoute.findAll({
            where: { user_id: req.params.id }
        });
        res.send(userFavoriteRoutes);
    } catch (error) {
        res.send(error)
    };
};

// delete a user_favorite_route
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
        // delete on user_favorite_route by id
        if (req.params.id) {
            UserFavoriteRoute.destroy({
                where: { id: req.params.id }
            }).then(rowDeleted => {
                if (rowDeleted == 1) {
                    didDelete();
                } else {
                    didNotDelete();
                };
            });
        };
        // delete all of a user's favorite_routes by user id
        if (req.params.userId) {
            UserFavoriteRoute.destroy({
                where: { user_id: req.params.userId }
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