module.exports = app => {
    const user_ticks = require("../controllers/userTickController.js");
    const router = require("express").Router();

    router.post("/", user_ticks.create);
    router.get("/:id", user_ticks.findAll);
    router.delete("/:id", user_ticks.delete);

    app.use('/api/v1/user_ticks', router);
};