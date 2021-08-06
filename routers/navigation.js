const express = require("express");
const app = express.Router();
const controller = require("../controllers/useController");

app.get("/", controller.NavData);

module.exports = app;
