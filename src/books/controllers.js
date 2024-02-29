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

const deleteAllBooks = async (req, res) => {
  try {
    await Book.destroy({ where: {} });
    res.status(200).json({ message: "All books were deleted" });
  } catch (error) {
    res.status(500).json({ message: "Internal error", error });
  }
};

const updateBookByTitle = async (req, res) => {
  const title = req.params.title;
  const newTitle = req.body.title;
  try {
    const updateTitle = await Book.update(
      { title: newTitle },
      { where: { title: title } }
    );
    if (!title) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: `${updateTitle} was updated` });
  } catch (error) {
    res.status(500).json({ message: "Internal error", error });
  }
};

module.exports = {
  addBook,
  getAllBooks,
  getBookByTitle,
  deleteAllBooks,
  updateBookByTitle,
};
