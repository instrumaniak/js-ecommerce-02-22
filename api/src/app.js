require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");

mongoose
  .connect(config.MDB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.json({ success: true, message: "Hello world!" });
});

app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});
