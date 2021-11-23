// .env
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// dependencies/imports
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");

const corsOptions = {
    origin: "http://localhost:3001"
};

// middleware
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// call sync()
db.sequelize.sync();

// test route
app.get("/", (req, res) => {
    res.send("Welcome to Onsight");
});

// user routes
require("./app/routes/user_routes.js")(app);

// gym routes
require("./app/routes/gym_routes.js")(app);

// climbing route routes
require("./app/routes/climbing_route_routes.js")(app);

// gym wall section routes
require("./app/routes/gym_wall_section_routes.js")(app);

// tick routes
require("./app/routes/tick_routes.js")(app);

// user_ticks (join table) routes
require("./app/routes/user_tick_routes.js")(app);

// user_favorite_routes (join table) routes
require("./app/routes/user_favorite_route_routes.js")(app);

// user_favorite_gyms (join table) routes
require("./app/routes/user_favorite_gym_routes.js")(app);

// route_tags routes
require("./app/routes/route_tag_routes.js")(app);

// set port and listen for requests
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));