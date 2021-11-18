module.exports = app => {
    const gyms = require("../controllers/gym_controller.js");
    const router = require("express").Router();

    // create new gym
    router.post("/", gyms.create);

    // get all gyms
    router.get("/", gyms.findAll);

    // get a gym
    router.get("/:id", gyms.findOne);

    // update gym
    router.patch("/:id", gyms.update);

    // delete gym
    router.delete("/:id", gyms.delete);

    app.use('/api/v1/gyms', router);
};