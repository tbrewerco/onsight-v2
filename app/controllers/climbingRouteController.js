const db = require("../../db/index.js");
const ClimbingRoute = db.climbingRoutes;
const Op = db.Sequelize.Op;

// create climbing route
exports.create = async (req, res) => {
    try {
        const climbingRoute = await ClimbingRoute.create(req.body);
        res.status(200).send(climbingRoute);
    } catch (error) {
        res.status(500).send("Controller error:" + error.message);
    };
};

// get all climbing routes
exports.findAll = async (req, res) => {
    try {
        const climbingRoutes = await ClimbingRoute.findAll();
        res.status(200).send(climbingRoutes);
    } catch (error) {
        res.status(500).send("Controller error:" + error.message);
    };
};

// get a climbing route by Id
exports.findOne = async (req, res) => {
    try {
        const climbingRoute = await ClimbingRoute.findByPk(req.params.id);
        if (climbingRoute === null) {
            throw error;
        } else {
            res.status(200).send(climbingRoute);
        };
    } catch (error) {
        res.status(500).send("Controller error:" + error.message);
    };
};

// update climbing route
exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        await ClimbingRoute.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).send({
            message: "Updated successfully"
        });
    } catch (error) {
        res.status(500).send("Controller error:" + error.message);
    };
};

// delete climbing route
exports.delete = (req, res) => {
    try {
        ClimbingRoute.destroy({
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
        res.status(500).send("Controller error" + error.message);
    };
};