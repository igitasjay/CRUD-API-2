const express = require("express");
const bookRouter = express.Router();
const {
  createBook,
  getBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("../controllers/book.controllers.js");

bookRouter.post("/", createBook);

bookRouter.get("/", getBooks);

bookRouter.get("/:id", getSingleBook);

bookRouter.put("/:id", updateBook);

bookRouter.delete("/:id", deleteBook);

module.exports = bookRouter;
