module.exports = app => {
    const user_ticks = require("../controllers/user_tick_controller.js");
    const router = require("express").Router();

    // create new user_tick
    router.post("/", user_ticks.create);

    // get user_ticks by user_id OR get all user_ticks if user_id = "null"
    router.get("/:id", user_ticks.findAll);

    // delete user_tick by user_id
    router.delete("/:id", user_ticks.delete);

    app.use('/api/v1/user_ticks', router);
};