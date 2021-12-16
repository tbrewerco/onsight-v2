module.exports = app => {
    const gym_wall_sections = require("../controllers/gymWallSectionController.js");
    const router = require("express").Router();

    router.post("/", gym_wall_sections.create);
    router.get("/", gym_wall_sections.findAll);
    router.get("/:id", gym_wall_sections.findOne);
    router.patch("/:id", gym_wall_sections.update);
    router.delete("/:id", gym_wall_sections.delete);

    app.use('/api/v1/gym_wall_sections', router);
};