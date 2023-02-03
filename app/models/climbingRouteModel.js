module.exports = (sequelize, Sequelize) => {
    const Climbing_route = sequelize.define("climbing_route", {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true,
        },
        isTopRope: {
            type: Sequelize.ENUM('yes', 'no'),
            allowNull: false,
            notEmpty: true
        },
        isAutoBelay: {
            type: Sequelize.ENUM('yes', 'no'),
            allowNull: false,
            notEmpty: true
        },
        isLeadClimb: {
            type: Sequelize.ENUM('yes', 'no'),
            allowNull: false,
            notEmpty: true
        },
        isBoulder: {
            type: Sequelize.ENUM('yes', 'no'),
            allowNull: false,
            notEmpty: true
        },
        holdColor: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true,
        },
        setterGrade: {
            type: Sequelize.INTEGER,
            min: 1,
            max: 30
        },
        gymWallSectionId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'gym_wall_sections',
                key: 'id'
            }
        },
        setterId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        gymId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'gyms',
                key: 'id'
            }
        },
        imageUrl: {
            type: Sequelize.STRING,
            unique: true
        }
    }, {
        underscored: true
    });
    return Climbing_route;
};