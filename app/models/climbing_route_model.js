module.exports = (sequelize, Sequelize) => {
    const Climbing_route = sequelize.define("climbing_route", {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true,
        },
        is_top_rope: {
            type: Sequelize.ENUM('yes', 'no'),
            allowNull: false,
            notEmpty: true
        },
        is_auto_belay: {
            type: Sequelize.ENUM('yes', 'no'),
            allowNull: false,
            notEmpty: true
        },
        is_lead_climb: {
            type: Sequelize.ENUM('yes', 'no'),
            allowNull: false,
            notEmpty: true
        },
        is_boulder: {
            type: Sequelize.ENUM('yes', 'no'),
            allowNull: false,
            notEmpty: true
        },
        hold_color: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true,
        },
        setter_grade: {
            type: Sequelize.INTEGER,
            min: 1,
            max: 30
        },
        gym_wall_section_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'gym_wall_sections',
                key: 'id'
            }
        },
        setter_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        gym_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'gyms',
                key: 'id'
            }
        },
        image_url: {
            type: Sequelize.STRING,
            unique: true
        },
        is_boulder_or_rope_climb: {
            type: Sequelize.ENUM('rope', 'boulder'),
            allowNull: false
        }
    });
    return Climbing_route;
};