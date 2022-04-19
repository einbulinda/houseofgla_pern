const asyncHandler = require("express-async-handler"),
  pool = require("../db"),
  bcrypt = require("bcrypt"),
  jwtGenerator = require("../utils/jwtGenerator");

//   Registration
//  authorization/register
exports.registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (user.rows.length > 0) {
      return res.status(401).json("User already exists!");
    }

    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    let newUser = await pool.query(
      "INSERT INTO users (first_name, last_name, email,password) VALUES ($1,$2,$3,$4) RETURNING *",
      [firstName, lastName, email, bcryptPassword]
    );

    const jwtToken = jwtGenerator(newUser.rows[0].user_id);

    return res.json({ jwtToken });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
});

// LOGIN
// authorization/login
exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await pool.query("SELECT * FROM users WHERE email =$1", [
      email,
    ]);

    //   No email found in DB
    if (user.rows.length === 0) {
      return res.status(401).json("Invalid Credentials");
    }

    // Validate password
    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!validPassword) {
      return res.status(401).json("Invalid Password");
    }

    const jwtToken = jwtGenerator(user.rows[0].user_id);
    return res.json({ jwtToken });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

exports.verifyUser = asyncHandler(async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});
