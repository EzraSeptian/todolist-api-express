const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Task = require("./models/toDoListModel");
const routes = require("./routes/toDoListRoute");

// Express will now handle JSON and URL-encoded data by default
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Node API is running on port ${PORT}`);
});

mongoose
  .connect("mongodb+srv://ezra_sept:ezra123456@todolist.zlayj0v.mongodb.net/your_database_name?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

// Global promise rejection handling
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});
