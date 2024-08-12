const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getSingleProduct,
  createNewProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

router.get("/", getAllProducts);

router.get("/:id", getSingleProduct);

router.post("/", createNewProduct);

router.put("/:id", editProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
