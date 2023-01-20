const User = require('../models/userModel.js');

module.exports = (sequelize, Sequelize) => {
    const Tick = sequelize.define("tick", {
        comment: {
            type: Sequelize.STRING,
        },
        did_send: {
            type: Sequelize.ENUM('yes', 'no'),
            allowNull: false,
        },
        did_flash: {
            type: Sequelize.ENUM('yes', 'no'),
            defaultValue: 'no'
        },
        did_onsight: {
            type: Sequelize.ENUM('yes', 'no'),
            defaultValue: 'no'
        },
        quality_rating: {
            type: Sequelize.INTEGER,
            min: 1,
            max: 5
        },
        difficulty_grade: {
            type: Sequelize.INTEGER,
            min: 1,
            max: 30
        },
        gym_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'gyms',
                key: 'id'
            }
        },
        route_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'climbing_routes',
                key: 'id'
            }
        },
        user_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
        }
    });

    Tick.associate = (models) => {
        Tick.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        });
    };

    return Tick;
};