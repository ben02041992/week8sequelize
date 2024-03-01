require("dotenv").config();
const express = require("express");
const sequelize = require("./db/connection");

const Book = require("./books/model");
const Genre = require("./genres/model");
const Author = require("./authors/model");

const bookRouter = require("./books/routes");
const genreRouter = require("./genres/routes");
const authorRouter = require("./authors/routes");

const PORT = process.env.PORT || 5001;

const app = express();

const syncTables = async () => {
  Genre.hasMany(Book);
  Book.belongsTo(Genre);

  Author.hasMany(Book);
  Book.belongsTo(Author);

  await Genre.sync();
  await Author.sync();
  await Book.sync();
};

app.use(express.json());

app.get("/health", (req, res) => {
  try {
    res.status(200).json({ success: true, message: "API is healthy" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "API Error", error: error.message });
  }
});

app.use("/books", bookRouter);
app.use("/genres", genreRouter);
app.use("/authors", authorRouter);

app.listen(PORT, () => {
  syncTables();

  console.log(`Server is running on port ${PORT}`);
});
