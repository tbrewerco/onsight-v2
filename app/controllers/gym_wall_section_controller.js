// create gym wall section
exports.create = async (req, res) => {
    try {
        const gym_wall_section = await Gym_wall_section.create({
            name: req.body.name,
            gym_id: req.body.gym_id
        });
        res.send(gym_wall_section);
    } catch (error) {
        res.send({
            "Error": error
        });
    };
};

// get all gym wall sections
exports.findAll = async (req, res) => {
    try {
        const gym_wall_sections = await Gym_wall_section.findAll();
        res.send(gym_wall_sections);
    } catch (error) {
        res.send(error)
    };
};

// get a gym wall section by Id
exports.findOne = async (req, res) => {
    try {
        const gym_wall_section = await Gym_wall_section.findByPk(req.params.id);
        if (gym_wall_section === null) {
            throw error;
        } else {
            res.send(gym_wall_section)
        };
    } catch (error) {
        res.send({
            message: "No wall section found"
        });
    };
};

// update gym wall section
exports.update = async (req, res) => {
    try {
        await Gym_wall_section.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).send({
            message: "Updated successfully"
        });
    } catch (error) {
        res.send(error);
    };
};

// delete gym wall section
exports.delete = (req, res) => {
    try {
        Gym_wall_section.destroy({
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
        res.status(500).send({
            message: "Error: wall section not deleted"
        });
    };
};