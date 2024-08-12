const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const bookRoute = require("./routes/book.route.js");
const app = express();

app.use(express.json());
app.use("/api/products", productRoute);
app.use("/api/books", bookRoute);

app.get("/", (req, res) => {
  res.send("Hi from this server");
});

mongoose
  .connect(
    "mongodb+srv://iamjaypegg:hovW8D2IBxCztMQP@newcluster.w8kmz.mongodb.net/?retryWrites=true&w=majority&appName=newcluster"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(1000, () => {
      console.log("Server running on port 1000");
    });
  })
  .catch(() => {
    console.log("Error connecting to MongoDB");
  });
