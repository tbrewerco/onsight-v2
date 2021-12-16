module.exports = app => {
    const gyms = require("../controllers/gymController.js");
    const router = require("express").Router();

    router.post("/", gyms.create);
    router.get("/", gyms.findAll);
    router.get("/:id", gyms.findOne);
    router.patch("/:id", gyms.update);
    router.delete("/:id", gyms.delete);

    app.use('/api/v1/gyms', router);
};