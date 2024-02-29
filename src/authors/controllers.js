const Book = require("../books/model");
const Author = require("./model");

const addAuthor = async (req, res) => {
  try {
    const author = await Author.create({
      authorName: req.body.authorName,
    });
    res.status(201).json({
      message: `${author.authorName} was added`,
      author: author,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getAllAuthors = async (req, res) => {
  const authors = await Author.findAll({ include: "Book" });
  res.send(authors);
};

const getBookByAuthor = async (req, res) => {
  const author = await Author.findOne({
    where: { author: req.params.name },
  });
  const book = await Book.findAll({ where: { id: book.AuthorId } });

  res.send({ book: book, author: author });
};

module.exports = {
  addAuthor,
  getAllAuthors,
  getBookByAuthor,
};
