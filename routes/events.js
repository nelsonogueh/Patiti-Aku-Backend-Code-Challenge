const express = require("express");
const app = express();
app.use(express.json());

// Create an event record
app.post("/", (req, res) => {
  res.status(200).send({
    status: "success",
    message: "events post route",
  });
});

app.all("*", async (req, res) => {
  res.status(404).send({
    status: "success",
    message: "Sorry the content you're looking for could not be found!.",
  });
});

module.exports = app;
