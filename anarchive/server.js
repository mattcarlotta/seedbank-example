"use strict";

require("dotenv").config({ path: "../.env" });
const { resolve } = require("path");
const express = require("express");
const session = require("express-session");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const fs = require("fs");
const morgan = require("morgan");
const cors = require("cors");

const authRoutes = require("./routes/api/auth");

const port = process.env.DB_PORT || 5000;
const inProduction = process.env.NODE_ENV === "production";

const app = express();
const router = express.Router();

// For the cors config below, when in production, "http://localhost:5000" should be "http://foo.com"
app.use(
  cors({
    origin: inProduction ? "http://localhost:5000" : "http://localhost:3000"
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("tiny"));

// Configure API routes
// var routes_path = "./routes/api/"; // './routes/api/'
// var api_routes = fs.readdirSync(routes_path);
// for (var i = 1; i < api_routes.length; i++) {
//   var route = api_routes[i].slice(0, -3);
//   app.use("/api/" + route, require(routes_path + route));
// }

app.use("/api/auth", authRoutes);

// function start_connection() {
//   const db = mysql.createConnection({
//     host: process.env.DB_HOST || $DB_HOST,
//     database: process.env.DB_NAME || $DB_NAME,
//     user: process.env.DB_USER || $DB_USER,
//     password: process.env.DB_PASSWORD || $DB_PASSWORD
//   });
//
//   db.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected to database");
//   });
//
//   db.on("error", function(err) {
//     if (err.code === "PROTOCOL_CONNECTION_LOST") {
//       console.log("Connection lost; restarting");
//       start_connection();
//     } else {
//       throw err;
//     }
//   });
// }
//
// start_connection();

// in development, webpack-dev-server (which the create-react-app hides)
// will serve assets, in production express will now serve both our client-side
// "build" assets AND the API
if (inProduction) {
  // express will serve up production assets
  app.use(express.static(`../client/build`));

  // express will serve up the front-end index.html file if it doesn't recognize the route
  app.get("*", (req, res) =>
    res.sendFile(resolve(`../client/build/index.html`))
  );
}

app.listen(port, () => console.log(`Listening on port ${port}`));
