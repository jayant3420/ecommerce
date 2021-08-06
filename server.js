const express = require("express");
const morgan = require("morgan");
const app = express();
const nav = require("./routers/navigation");
const PORT = process.env.PORT || 5000;

app.use(morgan("tiny"));
app.use(express.json());
app.use("/navdata", nav);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, console.log(`server running at port ${PORT}`));
