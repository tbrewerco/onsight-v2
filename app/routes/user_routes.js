module.exports = app => {
    const users = require("../controllers/user_controller.js");
    const router = require("express").Router();

    // create new user
    router.post("/", users.create);

    // get all users
    router.get("/", users.findAll);

    // get a user
    router.get("/:id", users.findOne);

    // update user
    router.patch("/:id", users.update);

    // delete user
    router.delete("/:id", users.delete);

    app.use('/api/v1/users', router);
};