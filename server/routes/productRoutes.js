const express = require("express"),
  router = express.Router(),
  { getProducts } = require("../controllers/productControllers");

router.get("/all-products", getProducts);

module.exports = router;
