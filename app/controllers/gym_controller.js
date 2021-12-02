const gymRepo = require("../repositories/gym_repo");

// create gym
exports.create = async (req, res) => {
    try {
        const gym = await gymRepo.create(req.body);
        res.status(200).send(gym);
    } catch (error) {
        throw new Error(error.message);
    };
};

// get all gyms
exports.findAll = async (req, res) => {
    try {
        const gyms = await Gym.findAll();
        res.send(gyms);
    } catch (error) {
        res.send(error)
    };
};

// get a gym by Id
exports.findOne = async (req, res) => {
    try {
        const gym = await Gym.findByPk(req.params.id);
        if (gym === null) {
            throw error;
        } else {
            res.send(gym)
        };
    } catch (error) {
        res.send({
            "Error": "No gym found"
        });
    };
};

// update gym
exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        await Gym.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).send({
            message: "Updated successfully"
        });
    } catch (error) {
        res.send(error);
    };
};

// delete gym
exports.delete = (req, res) => {
    try {
        Gym.destroy({
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
        res.status(500).send({
            message: "Error: gym not deleted"
        });
    };
};