const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(userID) {
  const payload = {
    user: {
      id: userID,
    },
  };

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
}

module.exports = jwtGenerator;
