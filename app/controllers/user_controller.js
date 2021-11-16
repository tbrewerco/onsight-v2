const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// create user
exports.create = async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username,
            given_name: req.body.given_name,
            family_name: req.body.family_name,
            role: req.body.role,
            email: req.body.email,
            password: req.body.password,
            profile_photo_url: req.body.profile_photo_url
        });
        res.send(user);
    } catch (error) {
        res.send({
            "Error": error.errors[0].message
        });
    };
};

// get all users
exports.findAll = async (req, res) => {
    try {
        const users = await User.findAll();
        res.send(users);
    } catch (error) {
        res.send(error)
    };
};

// get a user by Id
exports.findOne = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user === null) {
            throw error;
        } else {
            res.send(user)
        };
    } catch (error) {
        res.send({
            "Error": "No user found"
        });
    };
};

// update user

// delete user