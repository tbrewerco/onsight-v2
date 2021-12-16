module.exports = app => {
    const users = require("../controllers/userController.js");
    const router = require("express").Router();

    router.post("/", users.create);
    router.get("/", users.findAll);
    router.get("/:id", users.findOne);
    router.patch("/:id", users.update);
    router.delete("/:id", users.delete);

    app.use('/api/v1/users', router);
};