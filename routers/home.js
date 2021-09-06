const { response } = require("express");
const express = require("express");
const homeRoute = express.Router();
const model = require("../models/model");

homeRoute.get("/cart", (req, res) => {
  model.cart.find((error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
});

homeRoute.get("/voucher", (req, res) => {
  const param = req.query;
  console.log(param);
  model.voucher.find(
    { coupon_code: param.coupon_code },
    { discount: 1, _id: 0 },
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        res.send(result);
      }
    }
  );
});

homeRoute.delete("/delete", (req, res) => {
  const param = req.body;
  model.cart.deleteOne({ _id: param._id }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

homeRoute.put("/update", (req, res) => {
  const params = req.body;
  model.cart.updateOne(
    { _id: params._id },
    { $set: { quantity: params.qty } },
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

homeRoute.post("/addtocart", async (req, res) => {
  const {
    id,
    img_src,
    item_description,
    size,
    color,
    rating_points,
    old_price,
    new_price,
    brand,
    category,
    liked,
    subcategory,
    total_sale
  } = req.body;

  const cart = new model.cart({
    id,
    img_src,
    item_description,
    size,
    color,
    rating_points,
    old_price,
    new_price,
    brand,
    category,
    liked,
    subcategory,
    total_sale,
    quantity: 1
  });

  try {
    const response = await cart.save();
    res.send({ status: "ok", payload: response });
  } catch (error) {
    throw error;
  }
});

module.exports = homeRoute;
