// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const birdsController = require("./controllers/birdsController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to my Bird Collection Store!");
});

app.use("/birds", birdsController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("404 Page Not Found!");
});

// EXPORT
module.exports = app;
