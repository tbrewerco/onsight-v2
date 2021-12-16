const db = require("../../db/index.js");
const ClimbingRoute = db.climbingRoutes;
const Op = db.Sequelize.Op;

// create climbing route
exports.create = async (req, res) => {
    try {
        const climbingRoute = await ClimbingRoute.create({
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
        res.send(climbingRoute);
    } catch (error) {
        res.status(500).send("Controller error:" + error.message)
    };
};

// get all climbing routes
exports.findAll = async (req, res) => {
    try {
        const climbingRoutes = await ClimbingRoute.findAll();
        res.send(climbingRoutes);
    } catch (error) {
        res.send(error)
    };
};

// get a climbing route by Id
exports.findOne = async (req, res) => {
    try {
        const climbingRoute = await ClimbingRoute.findByPk(req.params.id);
        if (climbingRoute === null) {
            throw error;
        } else {
            res.send(climbingRoute)
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
        await climbingRoute.update(req.body, {
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
        climbingRoute.destroy({
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
                    });
                };
            });
    } catch (error) {
        res.status(500).send(
            "Controller error" + error.message
        );
    };
};