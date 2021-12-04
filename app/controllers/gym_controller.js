const gymRepo = require("../repositories/gym_repo");

exports.create = async (req, res) => {
    try {
        const gym = await gymRepo.createGym(req.body);
        res.status(200).send(gym);
    } catch (error) {
        throw new Error(error.message);
    };
};

exports.findAll = async (req, res) => {
    try {
        const gyms = await gymRepo.findAllGyms();
        // console.log(gyms);
        res.send(gyms);
    } catch (error) {
        throw new Error(error.message);
    };
};

exports.findOne = async (req, res) => {
    try {
        const gym = await gymRepo.findGymById(req.params.id);
        gym.length >= 1 ? res.send(gym) : error;
    } catch (error) {
        res.send(error = "Controller Error: Not found");
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