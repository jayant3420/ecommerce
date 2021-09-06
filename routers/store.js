const express = require("express");
const storeRoute = express.Router();
const model = require("../models/model");

storeRoute.get("/nav", (req, res) => {
  model.bestSellerNav.find((error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
});

storeRoute.get("/facilities", (req, res) => {
  model.facilityModel.find((error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
});

storeRoute.put("/likedUpdate", (req, res) => {
  const params = req.body;
  model.productModel.updateOne(
    { id: params.id },
    { $set: { liked: params.liked } },
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        res.send(result);
      }
    }
  );
});

storeRoute.get("/getProduct", (req, res) => {
  const { id } = req.query;
  model.productModel.find({ id: id }, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
});

module.exports = storeRoute;
