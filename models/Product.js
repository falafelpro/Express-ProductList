const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: String,
  image: String,
  description: String,
  color: String,
  quantity: Number,
  price: {
    type: Number,
    default: 232,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
