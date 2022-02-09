const express = require("express");
const productController = require("./product.controller");

const router = express.Router();

router.get("/", productController.getAllProducts);

module.exports = router;
