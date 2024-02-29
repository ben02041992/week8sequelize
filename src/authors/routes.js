const { Router } = require("express");
const authorRouter = Router();

const { addAuthor, getAllAuthors, getBookByAuthor } = require("./controllers");

authorRouter.post("/authors/addAuthor", addAuthor);

authorRouter.get("/authors/getAllAuthors", getAllAuthors);

authorRouter.get("/authors/getBookByAuthor/:author", getBookByAuthor);

module.exports = authorRouter;
