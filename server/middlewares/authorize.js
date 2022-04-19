const jwt = require("jsonwebtoken");
require("dotenv").config();

// Middleware will continue if the token is inside the local storage
module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("jwt_token");

  // If no token is set
  if (!token) {
    return res.status(403).json({ message: "Authorization denied" });
  }

  // Verify Token
  try {
    // It is going to give us the user id (user:{id:user.id})
    const Verify = jwt.verify(token, process.env.JWT_SECRET);

    req.user = verify.user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is invalid" });
  }
};
