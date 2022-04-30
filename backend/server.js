const express = require("express");
const data = require("./data.js");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const seedRouter = require("./routes/seedRoutes.js");
const productRouter = require("./routes/productRoutes.js");
const categoryRouter = require("./routes/categoryRoutes.js");
const sliderRouter = require("./routes/sliderRoutes.js");
const userRouter = require("./routes/userRoutes.js");
const orderRouter = require("./routes/orderRoutes.js");

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/seed/", seedRouter);
app.use("/api/products/", productRouter);
app.use("/api/category/", categoryRouter);
app.use("/api/slider/", sliderRouter);
app.use("/api/users/", userRouter);
app.use("/api/orders/", orderRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

//for products
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

//for slider
app.get("/api/slider", (req, res) => {
  res.send(data.sliderItems);
});

//for category
app.get("/api/category", (req, res) => {
  res.send(data.category);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
