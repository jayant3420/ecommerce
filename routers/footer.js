const express = require("express");
const footerRoutes = express.Router();
const model = require("../models/model");

footerRoutes.get("/", (req, res) => {
  model.footer.find((error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
});

module.exports = footerRoutes;
