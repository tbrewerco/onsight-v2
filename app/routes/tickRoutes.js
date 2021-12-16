module.exports = app => {
    const ticks = require("../controllers/tickController.js");
    const router = require("express").Router();
    
    router.post("/", ticks.create);
    router.get("/", ticks.findAll);
    router.get("/:id", ticks.findOne);
    router.patch("/:id", ticks.update);
    router.delete("/:id", ticks.delete);

    app.use('/api/v1/ticks', router);
};