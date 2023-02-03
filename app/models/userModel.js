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
        givenName: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true
        },
        familyName: {
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
        profilePhotoUrl: {
            type: Sequelize.STRING,
            unique: true,
            validate: {
                isUrl: { msg: "Invalid URL" }
            }
        }
    }, {
        underscored: true
    });

    return User;

}