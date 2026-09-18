const express = require("express");
const morgan = require("morgan");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "AlgoQuest API is healthy",
  });
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;