require("dotenv").config();
const path = require("path");
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

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../public")));

app.use("/api/users", userRouter).use("/api/products", productRouter);

app.use((req, res, next) => {
  const err = new Error("path not found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    errors: [err.message],
  });
});

app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});
