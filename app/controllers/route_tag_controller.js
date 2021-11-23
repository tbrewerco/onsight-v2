const db = require("../models");
const Route_tag = db.route_tags;
const Op = db.Sequelize.Op;

// create route_tag
exports.create = async (req, res) => {
    try {
        const route_tag = await Route_tag.create({
            route_id: req.body.route_id,
            tag: req.body.tag,
        });
        res.status(200).send(route_tag);
    } catch (error) {
        res.send({
            "Error": error
        });
    };
};

// get all route_tags by route_id
exports.findAll = async (req, res) => {
    try {
        const route_tags = await Route_tag.findAll({
            where: { route_id: req.params.id }
        });
        res.send(route_tags);
    } catch (error) {
        res.send(error)
    };
};

// delete a route_tag or all of a route's tags
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
        // delete one route_tag by route_tag id
        if (req.params.id) {
            Route_tag.destroy({
                where: { id: req.params.id }
            }).then(rowDeleted => {
                if (rowDeleted == 1) {
                    didDelete();
                } else {
                    didNotDelete();
                };
            });
        };
        // delete all of a climbing routes's route_tags by route id
        if (req.params.route_id) {
            Route_tag.destroy({
                where: { route_id: req.params.route_id }
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
            message: "Error: route tag(s) not deleted", error
        });
    };
};