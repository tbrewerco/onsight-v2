module.exports = app => {
    const user_favorite_gyms = require("../controllers/userFavoriteGymController.js");
    const router = require("express").Router();

    router.post("/", user_favorite_gyms.create);
    router.get("/:id", user_favorite_gyms.findAll);
    router.delete("/:id", user_favorite_gyms.delete);
    router.delete("/user/:user_id", user_favorite_gyms.delete);

    app.use('/api/v1/user-favorite-gyms', router);
};