module.exports = app => {
    const route_tags = require("../controllers/route_tag_controller.js");
    const router = require("express").Router();

    // create new route_tag
    router.post("/", route_tags.create);

    // get all of a route's route_tags with route_id
    router.get("/:id", route_tags.findAll);

    // delete a single route_tag
    router.delete("/:id", route_tags.delete);

    // delete all of a routes's route_tags
    router.delete("/route/:route_id", route_tags.delete);

    app.use('/api/v1/route_tags', router);
};