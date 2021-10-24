const products = require("./products");
const express = require("express");

const app = express();

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:productId", (req, res) => {
  const { productId } = req.params;
  const requestedProduct = products.find(
    (product) => product.id === +productId
  );
  res.json(requestedProduct);
});
