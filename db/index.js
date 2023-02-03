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

db.gyms = require("../app/models/gymModel.js")(sequelize, Sequelize);
db.climbingRoutes = require("../app/models/climbingRouteModel.js")(sequelize, Sequelize);
db.gymWallSections = require("../app/models/gymWallSectionModel.js")(sequelize, Sequelize);
db.routeTags = require("../app/models/routeTagModel.js")(sequelize, Sequelize);
db.ticks = require("../app/models/tickModel.js")(sequelize, Sequelize);
db.users = require("../app/models/userModel.js")(sequelize, Sequelize);
db.userFavoriteRoutes = require("../app/models/userFavoriteRouteModel.js")(sequelize, Sequelize);
db.userFavoriteGyms = require("../app/models/userFavoriteGymModel.js")(sequelize, Sequelize);

// define associations
// gyms
db.gyms.hasMany(db.climbingRoutes);
db.climbingRoutes.belongsTo(db.gyms);

db.gyms.hasMany(db.gymWallSections);
db.gymWallSections.belongsTo(db.gyms);

// climbing routes
db.climbingRoutes.hasMany(db.ticks);
db.ticks.belongsTo(db.climbingRoutes);

db.climbingRoutes.hasMany(db.routeTags);
db.routeTags.belongsTo(db.climbingRoutes);

// gym wall sections
db.gymWallSections.hasMany(db.climbingRoutes);
db.climbingRoutes.belongsTo(db.gymWallSections);

// users
db.users.hasMany(db.ticks);
db.ticks.belongsTo(db.users);

// user favorite gyms
db.users.hasMany(db.userFavoriteGyms);
db.userFavoriteGyms.belongsTo(db.users);
db.gyms.hasMany(db.userFavoriteGyms);
db.userFavoriteGyms.belongsTo(db.gyms);

// user favorite routes
db.users.hasMany(db.userFavoriteRoutes);
db.userFavoriteRoutes.belongsTo(db.users);
db.climbingRoutes.hasMany(db.userFavoriteRoutes);
db.userFavoriteRoutes.belongsTo(db.climbingRoutes);

// the following will destroy data, so be careful
// sequelize.sync({ force: true });
// console.log("All models were synchronized successfully.");

module.exports = db;