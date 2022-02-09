require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const userRouter = require("./modules/user/user.router");
const productRouter = require("./modules/product/product.router");

mongoose
  .connect(config.MDB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const app = express();
const PORT = 5000;

app.use("/api/users", userRouter).use("/api/products", productRouter);

app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});
