module.exports = (sequelize, Sequelize) => {
    const Gym = sequelize.define("gym", {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            notEmpty: true,
        },
        address_street: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true
        },
        address_city: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true,
            isAlpha: true,
        },
        address_state: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true,
            isAlpha: true,
        },
        address_zip: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true,
            isNumeric: true,
        },
        address_coordinates: {
            type: Sequelize.GEOMETRY('POINT')
        },
        has_boulders: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
            defaultValue: null
        },
        has_sport_routes: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
            defaultValue: null
        },
        has_auto_belays: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
            defaultValue: null
        },
        created_by: {
            type: Sequelize.BOOLEAN
        },
        photo_url: {
            type: Sequelize.STRING,
            unique: true,
            validate: {
                isUrl: { msg: "Invalid URL" }
            },
            created_by: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id'
                }
            }
        }
    });
    return Gym;
}