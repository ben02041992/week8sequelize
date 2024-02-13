const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");

const Book = sequelize.define(
  "Book",
  {
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      defaultValue: "Some Author",
    },
    genre: {
      type: DataTypes.STRING,
      defaultValue: "Some genre",
    },
  },
  { timestamps: false }
);

module.exports = Book;
