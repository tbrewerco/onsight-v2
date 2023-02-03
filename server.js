// .env
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// dependencies/imports
const express = require("express");
const cors = require("cors");
const app = express();
const errorHandler = require("./middleware/errorHandler.js");
const corsOptions = {
    origin: "http://localhost:3001"
};

// middleware
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', errorHandler);

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
require("./app/routes/userFavoriteRouteRoutes.js")(app);
require("./app/routes/userFavoriteGymRoutes.js")(app);
require("./app/routes/routeTagRoutes.js")(app);

// throw error for missing endpoints 
app.all("*", (req, res, next) => {
    next(`The URL ${req.originalUrl} does not exist`, 404);
});

// set port and listen for requests
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));