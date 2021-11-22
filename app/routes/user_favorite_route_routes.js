module.exports = app => {
    const user_favorite_routes = require("../controllers/user_favorite_route_controller.js");
    const router = require("express").Router();

    // create new user_favorite_route
    router.post("/", user_favorite_routes.create);

    // get all user_favorite_routes with user_id
    router.get("/:id", user_favorite_routes.findAll);

    // delete a single favorite_route
    router.delete("/:id", user_favorite_routes.delete);

    // delete all of a user's favorite routes
    router.delete("/user/:user_id", user_favorite_routes.delete);

    app.use('/api/v1/user_favorite_routes', router);
};