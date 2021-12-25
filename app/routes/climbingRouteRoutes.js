module.exports = app => {
    const climbingRoutes = require("../controllers/climbingRouteController.js");
    const router = require("express").Router();

    router.post("/", climbingRoutes.create);
    router.get("/", climbingRoutes.findAll);
    router.get("/:id", climbingRoutes.findOne);
    router.patch("/:id", climbingRoutes.update);
    router.delete("/:id", climbingRoutes.delete);

    app.use('/api/v1/climbing-routes', router);
};