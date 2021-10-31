const connectDb = require("./db");
const express = require("express");
const productRoutes = require("./apis/products/routers");

const app = express();
app.use(express.json());
app.use(function (req, res, next) {
  console.log("Route: " + JSON.stringify(req.method));
  console.log("Path: " + req.originalUrl);
  console.log("Host: " + req.hostname);
  console.log("protocol: " + req.protocol);
  next();
});
app.use(productRoutes);
app.use(function (req, res, next) {
  res.status(404).send("Sorry ya m3awad can't find that Path!");
});

app.use(function errorHandler(err, req, res, next) {
  if (err) {
    res.status(err.status).json({ error: err });
  } else {
    res.status(500);
    res.json("error", { error: err });
  }
});
const port = 8000;
connectDb();
app.listen(port, () => {
  console.log(`The application is running on localhost:${port}`);
});
