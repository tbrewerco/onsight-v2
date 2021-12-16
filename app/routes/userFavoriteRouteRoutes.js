module.exports = app => {
    const user_favorite_routes = require("../controllers/userFavoriteRouteController.js");
    const router = require("express").Router();
    
    router.post("/", user_favorite_routes.create);
    router.get("/:id", user_favorite_routes.findAll);
    router.delete("/:id", user_favorite_routes.delete);
    router.delete("/user/:user_id", user_favorite_routes.delete);

    app.use('/api/v1/user_favorite_routes', router);
};