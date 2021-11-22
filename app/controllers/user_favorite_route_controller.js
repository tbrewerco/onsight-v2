const db = require("../models");
const User_favorite_route = db.user_favorite_routes;
const Op = db.Sequelize.Op;

// create user_favorite_route
exports.create = async (req, res) => {
    try {
        const user_favorite_route = await User_favorite_route.create({
            user_id: req.body.user_id,
            route_id: req.body.route_id
        });
        res.status(200).send(user_favorite_route);
    } catch (error) {
        res.send({
            "Error": error
        });
    };
};

// get all user_favorite_routes by user_id
exports.findAll = async (req, res) => {
    try {
        const user_favorite_routes = await User_favorite_route.findAll({
            where: { user_id: req.params.id }
        });
        res.send(user_favorite_routes);
    } catch (error) {
        res.send(error)
    };
};

// delete a user_favorite_route
exports.delete = (req, res) => {

    const didDelete = () => {
        res.status(200).send({
            message: "Deleted successfully"
        });
    };

    const didNotDelete = () => {
        res.send({
            message: "Cannot delete."
        });
    }

    try {
        // delete on user_favorite_route by id
        if (req.params.id) {
            User_favorite_route.destroy({
                where: { id: req.params.id }
            }).then(rowDeleted => {
                if (rowDeleted == 1) {
                    didDelete();
                } else {
                    didNotDelete();
                };
            });
        }
        // delete all of a user's favorite_routes by user id
        if (req.params.user_id) {
            User_favorite_route.destroy({
                where: { user_id: req.params.user_id }
            }).then(rowDeleted => {
                if (rowDeleted >= 1) {
                    didDelete();
                } else {
                    didNotDelete();
                };
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "Error: user favorite not deleted", error
        });
    };
};