const { Router } = require("express");
const bookRouter = Router();

const { addBook, getAllBooks, getBookByTitle } = require("./controllers");

bookRouter.post("/books/addBook", addBook);

bookRouter.get("/books/getAllBooks", getAllBooks);

bookRouter.get("/books/getBookByTitle/:title", getBookByTitle);

module.exports = bookRouter;
