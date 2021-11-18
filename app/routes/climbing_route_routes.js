module.exports = app => {
    const climbing_routes = require("../controllers/climbing_route_controller.js");
    const router = require("express").Router();

    // create new gym
    router.post("/", climbing_routes.create);

    // get all gyms
    router.get("/", climbing_routes.findAll);

    // get a gym
    router.get("/:id", climbing_routes.findOne);

    // update gym
    router.patch("/:id", climbing_routes.update);

    // delete gym
    router.delete("/:id", climbing_routes.delete);

    app.use('/api/v1/climbing_routes', router);
};