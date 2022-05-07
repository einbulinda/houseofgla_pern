const express = require("express"),
  app = express(),
  cors = require("cors");

require("dotenv").config(); //process.env

// MIDDLEWARES
app.use(express.json()); //req.body

// Allow cross origin requests
app.use(cors({ credentials: true }));
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

// ROUTES
app.use("/api/authentication", require("./routes/jwtAuth"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/reviews", require("./routes/reviewsRoutes"));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
