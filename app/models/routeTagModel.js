module.exports = (sequelize, Sequelize) => {
    const Route_tag = sequelize.define("route_tag", {
        routeId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'climbing_routes',
                key: 'id'
            }
        },
        tag: {
            type: Sequelize.STRING,
        }
    }, {
        underscored: true
    }
    );
    return Route_tag;
}