module.exports = (sequelize, Sequelize) => {
    const User_tick = sequelize.define("user_tick", {
        user_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        tick_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'ticks',
                key: 'id'
            }
        }
    });
    return User_tick;
}