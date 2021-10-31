const express = require("express");
const router = express.Router();

const {
  getProductList,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("./controllers");

router.get("/api/products", getProductList);

router.get("/api/products/:productId", getProductById);

router.post("/api/products", createProduct);

router.delete("/api/products/:productId", deleteProduct);
router.put("/api/products/:productId", updateProduct);

module.exports = router;
