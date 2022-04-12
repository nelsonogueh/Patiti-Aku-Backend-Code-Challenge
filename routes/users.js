const express = require("express");
const app = express();

const { addUser } = require("../controllers/userController");

app.use(express.json());

// Fetch a user record
app.get("/", (req, res) => {});

// Creates a user record
app.post("/", addUser);

// Delete a user record
app.delete("/", (req, res) => {});

app.all("*", async (req, res) => {
  res.status(404).send({
    status: "success",
    message: "Sorry the content you're looking for could not be found!.",
  });
});

module.exports = app;
