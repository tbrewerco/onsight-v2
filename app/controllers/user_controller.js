const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// create and save new user
exports.create = (req, res) => {
    // validate request
    if (!req.body.username) {
        res.status(400)("Content cannot be empty.")
    };
    return;
};

// create a user
// const user = {
//     username: req.body.username,
//     given_name: req.body.given_name,
//     family_name: req.body.family_name,
//     email: req.body.email,
//     password: req.body.password,
//     profile_photo_url: req.body.profile_photo_url
// };

// // save tutorial in db
// User.create(user)
//     .then(data => {
//         res.send(data);
//     })
//     .catch(error => {
//         res.status(500).send({
//             message:
//                 error.message || "An error occurred while saving user"
//         });
//     });

// get all users from db
exports.findAll = (req, res) => {
    const username = req.query.username;
    let condition = title ? { title: { [Op.like]: `%${username}` } } : null;

    User.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message:
                    error.message || "An error occurred while retrieving user"
            });
        });
};