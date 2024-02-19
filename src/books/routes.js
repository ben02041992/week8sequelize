const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

const { addBook, getAllBooks, getBookByTitle } = require("./controllers");

bookRouter.post("/books/addBook", addBook);

// get all books

bookRouter.get("/books/getAllBooks", getAllBooks);

// update book author

// delete a single book by title

// get a single book by title

bookRouter.get("/books/getBookByTitle/:title", getBookByTitle);

module.exports = bookRouter;
