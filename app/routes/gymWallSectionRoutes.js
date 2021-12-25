module.exports = app => {
    const gymWallSections = require("../controllers/gymWallSectionController.js");
    const router = require("express").Router();

    router.post("/", gymWallSections.create);
    router.get("/", gymWallSections.findAll);
    router.get("/:id", gymWallSections.findOne);
    router.patch("/:id", gymWallSections.update);
    router.delete("/:id", gymWallSections.delete);

    app.use('/api/v1/gym-wall-Sections', router);
};