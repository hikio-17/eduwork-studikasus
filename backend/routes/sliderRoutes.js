const express = require("express");
const Slider = require("../models/sliderModel.js");

const sliderRouter = express.Router();

sliderRouter.get("/", async (req, res) => {
  const slider = await Slider.find();
  res.send(slider);
});

module.exports = sliderRouter;
