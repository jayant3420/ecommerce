const express = require("express");
const morgan = require("morgan");
const app = express();
const header = require("./routers/header");
const footer = require("./routers/footer");
const home = require("./routers/home");
const store = require("./routers/store");
const model = require("./models/model");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/header", header);
app.use("/footer", footer);
app.use("/home", home);
app.use("/store", store);

app.get("/products", (req, res) => {
  model.productModel.find((error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, console.log(`server running at port ${PORT}`));
