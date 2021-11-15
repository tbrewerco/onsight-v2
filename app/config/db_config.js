require("dotenv").config();
const USER = process.env.DB_USER
const PASSWORD = process.env.DB_PASSWORD
const DATABASE = process.env.DB_NAME

module.exports = {
    HOST: "localhost",
    USER: `${USER}`,
    PASSWORD: `${PASSWORD}`,
    DB: `${DATABASE}`,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
};