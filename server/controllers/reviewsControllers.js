const asyncHandler = require("express-async-handler"),
  pool = require("../db");

// Create a Review
exports.createReview = asyncHandler(async (req, res) => {
  const { product_id, user_id, rating, comments } = req.body;
  let myReview = {
      text: "SELECT * FROM reviews WHERE user_id=$1 AND product_id=$2",
      values: [user_id, product_id],
    },
    postReview = {
      text: "INSERT INTO reviews (product_id,user_id,rating,comments) VALUES ($1,$2,$3,$4) RETURNING *",
      values: [product_id, user_id, rating, comments],
    };

  try {
    const reviewExist = await pool.query(myReview);

    if (reviewExist.rows.length) {
      return res.status(401).json("You have already reviewed the product.");
    }

    let newReview = await pool.query(postReview);

    return res.json(newReview.rows);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Get User Review

// Get Product Reviews
exports.getReview = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Delete a Review
exports.deleteReview = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    res.json({ message: error.message });
  }
});
