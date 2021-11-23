const dbConfig = require("../config/db_config.js").development;
"use strict";
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user_model.js")(sequelize, Sequelize);
db.gyms = require("./gym_model.js")(sequelize, Sequelize);
db.climbing_routes = require("./climbing_route_model.js")(sequelize, Sequelize);
db.gym_wall_sections = require("./gym_wall_section_model.js")(sequelize, Sequelize);
db.ticks = require("./tick_model.js")(sequelize, Sequelize);
db.user_ticks = require("./user_tick_model.js")(sequelize, Sequelize);
db.user_favorite_routes = require("./user_favorite_route_model.js")(sequelize, Sequelize);
db.user_favorite_gyms = require("./user_favorite_gym_model.js")(sequelize, Sequelize);

module.exports = db;