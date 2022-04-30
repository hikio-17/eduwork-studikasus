const express = require("express");
const Category = require("../models/categoryModel.js");

const categoryRouter = express.Router();

categoryRouter.get("/", async (req, res) => {
  const category = await Category.find();
  res.send(category);
});

module.exports = categoryRouter;
