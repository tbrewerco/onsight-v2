module.exports = app => {
    const ticks = require("../controllers/tick_controller.js");
    const router = require("express").Router();

    // create new tick
    router.post("/", ticks.create);

    // get all ticks
    router.get("/", ticks.findAll);

    // get a tick
    router.get("/:id", ticks.findOne);

    // update tick
    router.patch("/:id", ticks.update);

    // delete tick
    router.delete("/:id", ticks.delete);

    app.use('/api/v1/ticks', router);
};