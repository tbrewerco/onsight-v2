// .env
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// dependencies/imports
const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
    origin: "http://localhost:3001"
};

// middleware
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// test route
app.get("/", (req, res) => {
    res.send("Welcome to Onsight");
});

// routes
require("./app/routes/userRoutes.js")(app);
require("./app/routes/gymRoutes.js")(app);
require("./app/routes/climbingRouteRoutes.js")(app);
require("./app/routes/gymWallSectionRoutes.js")(app);
require("./app/routes/tickRoutes.js")(app);
// require("./app/routes/userTickRoutes.js")(app);
require("./app/routes/userFavoriteRouteRoutes.js")(app);
require("./app/routes/userFavoriteGymRoutes.js")(app);
require("./app/routes/routeTagRoutes.js")(app);

// set port and listen for requests
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));