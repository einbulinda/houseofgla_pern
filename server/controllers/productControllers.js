const asyncHandler = require("express-async-handler"),
  pool = require("../db");

// Get All Products
exports.getProducts = asyncHandler(async (req, res) => {
  let productsList = {
    text: "SELECT *,(SELECT image_url FROM images WHERE product_id = products._id AND is_default='true'),(SELECT AVG(rating) AS ratings FROM reviews WHERE product_id = products._id)  FROM products WHERE is_active=$1",
    values: ["true"],
  };
  try {
    const allProducts = await pool.query(productsList);
    res.status(200).json(allProducts.rows);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// Add New Product
exports.createProduct = asyncHandler(async (req, res) => {
  const {
      name,
      brand,
      image_name,
      image_url,
      category_id,
      qty,
      cost,
      price,
      description,
    } = req.body,
    findProduct = {
      text: "SELECT * FROM products WHERE name = $1",
      values: [name],
    };

  try {
    const product = await pool.query(findProduct);

    if (product.rows.length > 0) {
      return res.status(401).json("Product already exists");
    }

    // Return the id only after insert
    let newProduct = await pool.query(
      "INSERT INTO products (name, brand, category_id, qty, cost, price, description) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
      [name, brand, category_id, qty, cost, price, description]
    );

    let saveImage = await pool.query(
      "INSERT INTO images (image_name,source,product_id,image_url,is_default) VALUES ($1,$2,$3,$4,$5) RETURNING *",
      [image_name, "products", newProduct.rows[0]._id, image_url, "True"]
    );

    const newProductDtls = await pool.query(
      "SELECT _id,name,brand,category_id,qty,cost,price,description,(SELECT image_url from images where product_id=$1 and is_default=$2 ) as image_url FROM products WHERE _id=$1",
      [newProduct.rows[0]._id, "true"]
    );

    pool.end();
    return res.json(newProductDtls.rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

// Edit Existing Product
exports.editProduct = asyncHandler(async (req, res) => {
  const { _id, name, brand, category_id, qty, cost, price, description } =
    req.body;

  try {
    const product = await pool.query("SELECT * FROM products WHERE _id =$1", [
      _id,
    ]);

    if (product.rowCount <= 0) {
      return res.status(404).json("Product with details given does not exist.");
    } else if (product.rowCount > 0) {
      //If product is found - edit only fields changing
      const updatedProduct = await pool.query(
        "UPDATE products SET name=$2, brand=$3, category_id=$4, qty=$5, cost=$6, price=$7, description=$8 WHERE _id=$1 RETURNING *",
        [
          _id,
          name,
          brand,
          category_id,
          qty,
          cost,
          price,
          description,
        ] /*Consider having audit trail of who updated and date time of event */
      );
      return res.json(updatedProduct.rows);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

// Update product images.
exports.updateImage = asyncHandler(async (req, res) => {
  const { image_name, source, product_id, user_id, image_url, is_default } =
    req.body;
});

// Delete a Product
exports.deleteProduct = asyncHandler(async (req, res) => {
  const { _id } = req.body;
  try {
    const product = await pool.query(
      "SELECT * FROM products WHERE _id =$1 AND is_active =$2",
      [_id, "true"]
    );

    if (product.rowCount <= 0) {
      return res.status(404).json("Product with given details does not exist.");
    } else {
      await pool.query("UPDATE products SET is_active=$2 WHERE _id=$1", [
        _id,
        "False",
      ]);
      return res.status(200).json("Product deactivated successfully.");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});
