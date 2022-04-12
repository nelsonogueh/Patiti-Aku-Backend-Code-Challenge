const express = require("express");

const db = require("../db/dbConnection");
const { addEvent } = require("../controllers/eventController");

const app = express();
app.use(express.json());

// Creates an event record
app.post("/", addEvent);

app.all("*", async (req, res) => {
  res.status(404).send({
    status: "success",
    message: "Sorry the content you're looking for could not be found!.",
  });
});

module.exports = app;
