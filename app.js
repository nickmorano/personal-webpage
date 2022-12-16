const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(cors());
app.get("/api", async (req, res) => {
res.send(
  [
    {
      "title": "sss",
      "body": "aaa",
      "author": "yoshi",
      "id": 4
    },
    {
      "title": "adfs",
      "body": "asdf",
      "author": "yoshi",
      "id": 5
    },
    {
      "title": "adfs",
      "body": "asdf",
      "author": "yoshi",
      "id": 6
    },
    {
      "title": "asdf",
      "body": "asdf",
      "author": "yoshi",
      "id": 7
    }
  ]
);
});
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`);
});