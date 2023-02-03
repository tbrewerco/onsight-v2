module.exports = (sequelize, Sequelize) => {
    const User_favorite_route = sequelize.define("user_favorite_route", {
        userId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        climbingRouteId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'climbing_routes',
                key: 'id'
            }
        }
    }, {
        underscored: true
    });
    return User_favorite_route;
}