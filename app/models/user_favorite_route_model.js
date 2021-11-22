module.exports = (sequelize, Sequelize) => {
    const User_favorite_route = sequelize.define("user_favorite_route", {
        user_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        route_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'climbing_routes',
                key: 'id'
            }
        }
    });
    return User_favorite_route;
}