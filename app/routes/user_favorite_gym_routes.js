module.exports = app => {
    const user_favorite_gyms = require("../controllers/user_favorite_gym_controller.js");
    const router = require("express").Router();

    // create new user_favorite_gym
    router.post("/", user_favorite_gyms.create);

    // get all user_favorite_gyms with user_id
    router.get("/:id", user_favorite_gyms.findAll);

    // delete a single favorite_gym
    router.delete("/:id", user_favorite_gyms.delete);

    // delete all of a user's favorite gyms
    router.delete("/user/:user_id", user_favorite_gyms.delete);

    app.use('/api/v1/user_favorite_gyms', router);
};