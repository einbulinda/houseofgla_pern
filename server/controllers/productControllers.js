const asyncHandler = require("express-async-handler"),
  pool = require("../db");

// Get All Products
exports.getProducts = asyncHandler(async (req, res) => {
  try {
    const allProducts = await pool.query("SELECT * FROM products");
    res.status(200).json(allProducts.rows);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});
