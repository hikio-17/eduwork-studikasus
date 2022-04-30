const express = require("express");
const Product = require("../models/productModel.js");
const data = require("../data.js");
const Category = require("../models/categoryModel.js");
const Slider = require("../models/sliderModel.js");
const User = require("../models/userModel.js");

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);

  await Category.remove({});
  const createdCategory = await Category.insertMany(data.category);

  await Slider.remove({});
  const createdSlider = await Slider.insertMany(data.sliderItems);

  await User.remove({});
  const createdUser = await User.insertMany(data.users);

  res.send({ createdProducts, createdCategory, createdSlider, createdUser });
});

module.exports = seedRouter;
