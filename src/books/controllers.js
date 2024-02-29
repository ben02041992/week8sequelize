const Book = require("./model");
const Author = require("../authors/model");
const Genre = require("../genres/model");

const addBook = async (req, res) => {
  try {
    const book = await Book.create({
      title: req.body.title,
      AuthorId: req.body.AuthorId,
      GenreId: req.body.GenreId,
    });
    if (res.status(404)) {
      console.log(res);
    }
    res.status(200).json({ message: `${book.title} was added`, book: book });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getAllBooks = async (req, res) => {
  const books = await Book.findAll({ include: "Genre" });
  res.send(books);
};

const getBookByTitle = async (req, res) => {
  const book = await Book.findOne({ where: { title: req.params.title } });
  const genre = await Genre.findOne({ where: { id: book.GenreId } });

  res.send({ book: book, genre: genre });
};

module.exports = {
  addBook,
  getAllBooks,
  getBookByTitle,
};
