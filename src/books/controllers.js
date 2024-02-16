const res = require("express/lib/response");
const Book = require("./model");
const req = require("express/lib/request");

const addBook = async (req, res) => {
  try {
    const book = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
    });
    res
      .status(200)
      .json({ message: `${book.title} was successfully added`, book });
  } catch (error) {
    console.error("Internal server error", error);
    res.status(500).json({ message: "Something went wrong", error });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll(req.log(books));
    res.send({ message: "All books: ", books });
  } catch (error) {
    error.console("Sorry an error has occurred", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

module.exports = {
  addBook,
  getAllBooks,
};
