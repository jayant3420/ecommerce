const express = require("express");
const morgan = require("morgan");
const app = express();
// const nav = require("./routers/navigation");
const model = require("./models/model");
const PORT = process.env.PORT || 5000;

app.use(morgan("tiny"));
app.use(express.json());

app.get("/home", (req, res) => {
  model.navigation.find((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, console.log(`server running at port ${PORT}`));
