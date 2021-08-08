const express = require("express");
const morgan = require("morgan");
const app = express();
const nav = require("./routers/navigation");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/home", nav);

app.listen(PORT, console.log(`server running at port ${PORT}`));
