const express = require("express"),
  router = express.Router(),
  {
    getProducts,
    createProduct,
    editProduct,
    deleteProduct,
  } = require("../controllers/productControllers");

router.get("/list", getProducts);
router.post("/create", createProduct);
router.post("/edit", editProduct);
router.post("/delete", deleteProduct);

module.exports = router;
