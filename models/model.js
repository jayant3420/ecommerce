const mongoose = require("./../configuration/db");
const { Schema } = mongoose;

const navSchema = new Schema({
  id: Number,
  name: String
});
exports.navigation = mongoose.model("navigations", navSchema);
