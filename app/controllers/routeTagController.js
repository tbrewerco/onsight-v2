const db = require("../../db/index.js");
const RouteTag = db.routeTag;
const Op = db.Sequelize.Op;

// create routeTag
exports.create = async (req, res) => {
    try {
        const routeTag = await RouteTag.create({
            route_id: req.body.route_id,
            tag: req.body.tag,
        })
        res.status(200).send(routeTag);
    } catch (error) {
        res.send({
            "Error": error
        });
    };
};

// get all routeTags by route_id
exports.findAll = async (req, res) => {
    try {
        const routeTags = await RouteTag.findAll({
            where: { route_id: req.params.id }
        });
        res.send(routeTags);
    } catch (error) {
        res.send(error)
    };
};

// delete a routeTag or all of a route's tags
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
        // delete one routeTag by routeTag id
        if (req.params.id) {
            RouteTag.destroy({
                where: { id: req.params.id }
            }).then(rowDeleted => {
                if (rowDeleted == 1) {
                    didDelete();
                } else {
                    didNotDelete();
                };
            });
        };
        // delete all of a climbing routes's routeTags by route id
        if (req.params.route_id) {
            RouteTag.destroy({
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