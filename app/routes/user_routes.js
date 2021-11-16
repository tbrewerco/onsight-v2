module.exports = app => {
    const users = require("../controllers/user_controller.js");
    const router = require("express").Router();

    // create new user
    router.post("/", users.create);

    // retrieve all users
    router.get("/", users.findAll);

    app.use('/api/v1/users', router);
};