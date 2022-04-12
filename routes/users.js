const express = require("express");
const app = express();

const db = require("../db/dbConnection");
const { validationMiddleware } = require("../middlewares/usersMiddleware");

app.use(express.json());

// Fetch a user record
app.get("/", validationMiddleware);

// Create a user record
app.post("/", (req, res) => {
  res.status(200).send({
    status: "success",
    message: "User post route",
  });
});

// Delete a user record
app.delete("/", (req, res) => {
  res.status(200).send({
    status: "success",
    message: "User delete route",
  });
});

app.all("*", async (req, res) => {
  res.status(404).send({
    status: "success",
    message: "Sorry the content you're looking for could not be found!.",
  });
});

module.exports = app;
