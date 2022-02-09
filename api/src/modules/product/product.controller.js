const ProductModel = require("./product.model");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({});
    return res.json({
      success: true,
      products,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
