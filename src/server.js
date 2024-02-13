require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.send({ message: "API is healthy" });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}.`);
});
