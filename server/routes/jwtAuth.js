const express = require("express"),
  router = express.Router(),
  validInfo = require("../middlewares/validInfo"),
  authorize = require("../middlewares/authorize"),
  jwtGenerator = require("../utils/jwtGenerator"),
  {
    registerUser,
    loginUser,
    verifyUser,
  } = require("../controllers/jwtAuthControllers");

// REGISTRATION
router.post("/register", validInfo, registerUser);
router.post("/login", validInfo, loginUser);
router.post("/verify", authorize, verifyUser);

module.exports = router;
