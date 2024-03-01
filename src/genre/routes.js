const { Router } = require("express");
const genreRouter = Router();

const {
  getAllGenres,
  addNewGenre,
  getBooksByGenreName,
} = require("./controllers");

genreRouter.get("/", getAllGenres);
genreRouter.post("/addGenre", addNewGenre);
genreRouter.get("/:genreName", getBooksByGenreName);

module.exports = genreRouter;
