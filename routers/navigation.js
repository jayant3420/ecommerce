const express = require("express");
const navRoutes = express.Router();
const model = require("./../models/model");

navRoutes.get("/", (req, res) => {
  model.navigation.find((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = navRoutes;
