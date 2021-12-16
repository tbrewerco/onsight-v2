const dbConfig = require("../app/config/db_config.js").development;
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

db.users = require("../app/models/userModel.js")(sequelize, Sequelize);
db.gyms = require("../app/models/gymModel.js")(sequelize, Sequelize);
db.climbingRoutes = require("../app/models/climbingRouteModel.js")(sequelize, Sequelize);
db.gymWallSections = require("../app/models/gymWallSectionModel.js")(sequelize, Sequelize);
db.ticks = require("../app/models/tickModel.js")(sequelize, Sequelize);
db.userTicks = require("../app/models/userTickModel.js")(sequelize, Sequelize);
db.userFavoriteRoutes = require("../app/models/userFavoriteRouteModel.js")(sequelize, Sequelize);
db.userFavoriteGyms = require("../app/models/userFavoriteGymModel.js")(sequelize, Sequelize);

module.exports = db;