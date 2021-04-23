const express = require("express");

const app = express();
const urlsRouter = require("./shortener/router");
const usesRouter = require("./uses/uses.router");

app.use(express.json());

// TODO: Add code to meet the requirements and make the tests pass.

app.use("/urls", urlsRouter);
app.use("/uses", usesRouter);

app.use((req, res, next) => {
  res.status(404).send({ error: `Not found: ${req.originalUrl}` });
});

app.use((error, req, res, next) => {
  const { status = 405, message = "Something went wrong" } = error;
  res.status(status).json({ error: message });
});

module.exports = app;