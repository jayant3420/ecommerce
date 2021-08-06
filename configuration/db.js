const mongoose = require("mongoose");
const url =
  "mongodb+srv://admin:admin@clustertest.w5ksk.mongodb.net/ecommerce?retryWrites=true&w=majority";

mongoose
  .connect(process.env.MONGO_URI || url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((response) =>
    console.log("Ecommerce Database Connection Created Successfully")
  )
  .catch((error) => console.log(error));

module.exports = mongoose;
