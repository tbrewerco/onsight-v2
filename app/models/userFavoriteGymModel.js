module.exports = (sequelize, Sequelize) => {
    const User_favorite_gym = sequelize.define("user_favorite_gym", {
        user_id: {
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
        // underscored: true
    });
    return User_favorite_gym;
}