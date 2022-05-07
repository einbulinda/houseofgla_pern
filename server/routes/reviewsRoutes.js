const express = require("express"),
  router = express.Router(),
  {
    createReview,
    getReview,
    deleteReview,
  } = require("../controllers/reviewsControllers");

router.get("/", getReview);
router.post("/create", createReview);
router.post("/delete", deleteReview);

module.exports = router;
