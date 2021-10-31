const Product = require("../../models/Product");

exports.getProductList = async (req, res, next) => {
  try {
    const list = await Product.find();
    res.json(list);
  } catch (error) {
    //res.status(500).json({ message: error });
    next(error);
  }
};

exports.getProductById = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const requestedProduct = await Product.findById(productId);
    res.json(requestedProduct);
  } catch (error) {
    next({ status: 404, msg: "Not Found" });
    //res.status(404).json([{ status: "Not Found" }]);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
    //res.status(500).json({ Status: "Failed Create Execution" });
  }
};

exports.deleteProduct = async (req, res, next) => {
  const { productId } = req.params;
  const foundProduct = await Product.findById(productId);
  if (foundProduct) {
    foundProduct.remove();
    res.status(204).end();
  } else {
    res
      .status(404)
      .json({ message: `Product of id: ${productId} does not exist` });
  }
};

exports.updateProduct = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const foundProduct = await Product.findById(productId);
    if (foundProduct) {
      //res.json(req.body);
      await foundProduct.updateOne(req.body, { new: true });
      res.status(204).end();
    } else {
      res
        .status(404)
        .json({ message: `Product of id: ${productId} does not exist` });
    }
  } catch (error) {
    next(error);
    //res.status(500).json({ message: error });
  }
};
