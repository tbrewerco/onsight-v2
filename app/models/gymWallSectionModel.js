module.exports = (sequelize, Sequelize) => {
    const Gym_wall_section = sequelize.define("gym_wall_section", {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            notEmpty: true,
        },
        gymId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'gyms',
                key: 'id'
            }
        }
    }, {
        underscored: true
    });
    return Gym_wall_section;
};