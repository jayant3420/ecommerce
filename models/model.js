const mongoose = require("./../configuration/db");
const { Schema } = mongoose;

const navSchema = new Schema({
  id: Number,
  name: String
});
exports.navigation = mongoose.model("navigations", navSchema);

const footerSchema = new Schema({});
exports.footer = mongoose.model("footers", footerSchema);

const cartSchema = new Schema({
  id: Number,
  img_src: String,
  item_description: String,
  size: String,
  color: String,
  rating_points: Number,
  old_price: Number,
  new_price: Number,
  brand: String,
  category: String,
  liked: String,
  subcategory: String,
  total_sale: Number,
  quantity: Number
});
exports.cart = mongoose.model("carts", cartSchema);

const voucherSchema = new Schema({
  id: Number,
  coupon_code: String,
  discount: String
});
exports.voucher = mongoose.model("coupons", voucherSchema);

const bestSellerNavSchema = new Schema({
  id: Number,
  navItem: String
});
exports.bestSellerNav = mongoose.model("bestsellernavs", bestSellerNavSchema);

const productSchema = new Schema({
  id: Number,
  img_src: String,
  item_description: String,
  size: String,
  color: String,
  rating_points: Number,
  old_price: Number,
  new_price: Number,
  brand: String,
  category: String,
  liked: String,
  subcategory: String,
  total_sale: Number
});
exports.productModel = mongoose.model("products", productSchema);

const facilitySchema = new Schema({
  id: Number,
  para1: String,
  para2: String
});
exports.facilityModel = mongoose.model("facilities", facilitySchema);
