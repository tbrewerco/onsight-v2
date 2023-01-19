module.exports = app => {
    const route_tags = require("../controllers/routeTagController.js");
    const router = require("express").Router();
    
    router.post("/", route_tags.create);
    router.get("/:id", route_tags.findAll);
    router.delete("/:id", route_tags.delete);
    router.delete("/route/:route_id", route_tags.delete);

    app.use('/api/v1/route-tags', router);
};