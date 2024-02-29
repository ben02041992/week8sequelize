const { Router } = require("express");

const genreRouter = Router();

// Genre Routes

const { addGenre, getAllGenres } = require("./controller");

genreRouter.post("/genres/addGenre", addGenre);

genreRouter.get("/genres/getAllGenres", getAllGenres);

module.exports = genreRouter;
