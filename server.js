const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan("tiny"));

app.listen(PORT, console.log(`server running at port ${PORT}`));