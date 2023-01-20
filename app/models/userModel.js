const Tick = require('../models/tickModel.js');

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            notEmpty: true,
            validate: {
                len: {
                    args: [3, 30],
                    msg: "must be between 3-30 characters"
                }
            }
        },
        given_name: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true
        },
        family_name: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true
        },
        role: {
            type: Sequelize.ENUM('admin', 'user'),
            defaultValue: 'user',
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isEmail: { msg: "Email format invalid" }
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true
        },
        profile_photo_url: {
            type: Sequelize.STRING,
            unique: true,
            validate: {
                isUrl: { msg: "Invalid URL" }
            }
        }
    });

    User.associate = (models) => {
        User.hasMany(Tick, {
            foreignKey: 'userId',
            as: 'userTicks'
        })
    }
    return User;

}