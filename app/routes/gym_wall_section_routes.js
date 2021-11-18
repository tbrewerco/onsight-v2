module.exports = app => {
    const gym_wall_sections = require("../controllers/gym_wall_section_controller.js");
    const router = require("express").Router();

    // create new wall section
    router.post("/", gym_wall_sections.create);

    // get all wall sections
    router.get("/", gym_wall_sections.findAll);

    // get a wall section
    router.get("/:id", gym_wall_sections.findOne);

    // update wall section
    router.patch("/:id", gym_wall_sections.update);

    // delete wall section
    router.delete("/:id", gym_wall_sections.delete);

    app.use('/api/v1/gym_wall_sections', router);
};