module.exports = app => {
    const climbing_routes = require("../controllers/climbingRouteController.js");
    const router = require("express").Router();
    
    router.post("/", climbing_routes.create);
    router.get("/", climbing_routes.findAll);
    router.get("/:id", climbing_routes.findOne);
    router.patch("/:id", climbing_routes.update);
    router.delete("/:id", climbing_routes.delete);

    app.use('/api/v1/climbing_routes', router);
};