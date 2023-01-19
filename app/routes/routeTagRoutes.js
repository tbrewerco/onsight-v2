module.exports = app => {
    const routeTags = require("../controllers/routeTagController.js");
    const router = require("express").Router();

    // findAll not necessary at this point
    router.post("/", routeTags.create);
    router.get("/:id", routeTags.findOne);
    router.delete("/:id", routeTags.delete);
    router.delete("/route/:route_id", routeTags.delete);

    app.use('/api/v1/route-tags', router);
};