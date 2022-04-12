const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());
app.options("*", cors());

app.listen(5010, () => {
  console.log(`Server running at port 5010`);
});

module.exports = app;
