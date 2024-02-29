const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Author = sequelize.define(
  "Author",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,    },
  },
  { timestamps: false }
);

module.exports = Author;
