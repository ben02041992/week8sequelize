const { Router } = require("express");
const bookRouter = Router();

const {
  addBook,
  getAllBooks,
  getBookByTitle,
  deleteAllBooks,
} = require("./controllers");

bookRouter.post("/books/addBook", addBook);

bookRouter.get("/books/getAllBooks", getAllBooks);

bookRouter.get("/books/getBookByTitle/:title", getBookByTitle);

bookRouter.delete("/books/deleteAll", deleteAllBooks);

module.exports = bookRouter;
