require("dotenv").config();
const express = require("express");

const Book = require("./books/model");
const Genre = require("./genres/model");
const Author = require("./authors/model");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

const bookRouter = require("./books/routes");
const genreRouter = require("./genres/routes");
const authorRouter = require("./authors/routes");

app.use("/books", bookRouter);
app.use("/genres", genreRouter);
app.use("/authors", authorRouter);

const syncTables = async () => {
  Book.belongsTo(Author);
  Author.hasMany(Book);

  Book.belongsTo(Genre);
  Genre.hasMany(Book);

  Genre.sync();
  Author.sync();
  Book.sync();
};

app.get("/health", (req, res) => {
  res.send({ message: "API is healthy" });
});

app.listen(port, async () => {
  console.log(`Server is running on ${port}.`);
  await syncTables();
});