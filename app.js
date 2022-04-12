const app = require("./server");

const usersRoute = require("./routes/users");
const eventsRoute = require("./routes/events");

// // Directing to the appropriate route handler
app.use("/users", usersRoute);
app.use("/events", eventsRoute);

// Handling all unhandled routes
app.all("*", async (req, res) => {
  res.status(200).send({
    status: "success",
    message:
      "Welcome to the simple consent app API. Please navigate to a more specific route.",
  });
});
