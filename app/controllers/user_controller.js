const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// create user
exports.create = (req, res) => {
    User.create({
        username: req.body.username,
        given_name: req.body.given_name,
        family_name: req.body.family_name,
        role: req.body.role,
        email: req.body.email,
        password: req.body.password,
        profile_photo_url: req.body.profile_photo_url
    }).then(user => {
        res.send(user)
    }).catch(error => {
        res.send({
            "Error": error.errors[0].message
        })
    })
};