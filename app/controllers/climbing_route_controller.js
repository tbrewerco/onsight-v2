const db = require("../models");
const Climbing_route = db.climbing_routes;
const Op = db.Sequelize.Op;

// create climbing route
exports.create = async (req, res) => {
    try {
        const climbing_route = await Climbing_route.create({
            name: req.body.name,
            is_top_rope: req.body.is_top_rope,
            is_auto_belay: req.body.is_auto_belay,
            is_lead_climb: req.body.is_lead_climb,
            is_boulder: req.body.is_boulder,
            hold_color: req.body.hold_color,
            setter_grade: req.body.setter_grade,
            wall_section_id: req.body.wall_section_id,
            setter_id: req.body.setter_id,
            gym_id: req.body.gym_id,
            image_url: req.body.image_url
        });
        res.send(climbing_route);
    } catch (error) {
        res.send({
            "Error": error
        });
    };
};

// get all climbing routes
exports.findAll = async (req, res) => {
    try {
        const climbing_routes = await Climbing_route.findAll();
        res.send(climbing_routes);
    } catch (error) {
        res.send(error)
    };
};

// get a climbing route by Id
exports.findOne = async (req, res) => {
    try {
        const climbing_route = await Climbing_route.findByPk(req.params.id);
        if (climbing_route === null) {
            throw error;
        } else {
            res.send(climbing_route)
        };
    } catch (error) {
        res.send({
            message: "No climbing route found"
        });
    };
};

// update climbing route
exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        await Climbing_route.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).send({
            message: "Updated successfully"
        });
    } catch (error) {
        res.send(error);
    };
};

// delete climbing route
exports.delete = (req, res) => {
    try {
        Climbing_route.destroy({
            where: { id: req.params.id }
        })
            .then(rowDeleted => {
                if (rowDeleted == 1) {
                    res.status(200).send({
                        message: "Deleted successfully"
                    });
                } else {
                    res.send({
                        message: "Cannot delete. Possibly not found"
                    });
                };
            });
    } catch (error) {
        res.status(500).send({
            message: "Error: climbing route not deleted"
        });
    };
};