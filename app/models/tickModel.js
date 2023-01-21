module.exports = (sequelize, Sequelize) => {
    const Tick = sequelize.define("tick", {
        comment: {
            type: Sequelize.STRING,
        },
        didSend: {
            type: Sequelize.ENUM('yes', 'no'),
            allowNull: false,
        },
        didFlash: {
            type: Sequelize.ENUM('yes', 'no'),
            defaultValue: 'no'
        },
        didOnsight: {
            type: Sequelize.ENUM('yes', 'no'),
            defaultValue: 'no'
        },
        qualityRating: {
            type: Sequelize.INTEGER,
            min: 1,
            max: 5
        },
        difficultyGrade: {
            type: Sequelize.INTEGER,
            min: 1,
            max: 30
        },
        routeId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'climbing_routes',
                key: 'id'
            }
        },
        userId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
        }
    }, {
        underscored: true
    });

    return Tick;
};