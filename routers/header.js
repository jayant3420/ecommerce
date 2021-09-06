const express = require("express");
const headRoute = express.Router();
const model = require("../models/model");

headRoute.get("/", (req, res) => {
  model.navigation.find((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = headRoute;
