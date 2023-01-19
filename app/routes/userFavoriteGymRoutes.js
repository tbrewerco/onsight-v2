module.exports = app => {
    const userFavoriteGyms = require("../controllers/userFavoriteGymController.js");
    const router = require("express").Router();

    router.post("/", userFavoriteGyms.create);
    router.get("/:id", userFavoriteGyms.findAll);
    router.delete("/:id", userFavoriteGyms.delete);
    router.delete("/user/:user_id", userFavoriteGyms.delete);

    app.use('/api/v1/user-favorite-gyms', router);
};