const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(cors());

app.get("/api/products", async (req, res) => {
  res.send(
    [
      {
        "id": 1,
        "name": "Keyboard",
        "image_location": "keyboard.png",
        "price": "25.44",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae harum voluptas, consequatur rem exercitationem reprehenderit laudantium nostrum magni? Natus repellat harum placeat quidem, beatae fuga ea eos nemo dolore qui!",
      },
      {
        "id": 2,
        "name": "Mouse",
        "image_location": "keyboard.png",
        "price": "25.44",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae harum voluptas, consequatur rem exercitationem reprehenderit laudantium nostrum magni? Natus repellat harum placeat quidem, beatae fuga ea eos nemo dolore qui!",
      },
      {
        "id": 3,
        "name": "Keyboard",
        "image_location": "keyboard.png",
        "price": "25.44",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae harum voluptas, consequatur rem exercitationem reprehenderit laudantium nostrum magni? Natus repellat harum placeat quidem, beatae fuga ea eos nemo dolore qui!",
      },
      {
        "id": 4,
        "name": "Keyboard",
        "image_location": "keyboard.png",
        "price": "25.44",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae harum voluptas, consequatur rem exercitationem reprehenderit laudantium nostrum magni? Natus repellat harum placeat quidem, beatae fuga ea eos nemo dolore qui!",
      },
      {
        "id": 5,
        "name": "Keyboard",
        "image_location": "keyboard.png",
        "price": "25.44",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae harum voluptas, consequatur rem exercitationem reprehenderit laudantium nostrum magni? Natus repellat harum placeat quidem, beatae fuga ea eos nemo dolore qui!",
      },
    ]
  );
});

app.get("/api/cart", async (req, res) => {
  res.send(
    [
      {
        "id": 1,
        "name": "Keyboard",
        "image_location": "keyboard.png",
        "price": "25.44",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae harum voluptas, consequatur rem exercitationem reprehenderit laudantium nostrum magni? Natus repellat harum placeat quidem, beatae fuga ea eos nemo dolore qui!",
        "quantity": 0,
      },
      {
        "id": 2,
        "name": "Keyboard",
        "image_location": "keyboard.png",
        "price": "25.44",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae harum voluptas, consequatur rem exercitationem reprehenderit laudantium nostrum magni? Natus repellat harum placeat quidem, beatae fuga ea eos nemo dolore qui!",
        "quantity": 0,
      },
      {
        "id": 3,
        "name": "Keyboard",
        "image_location": "keyboard.png",
        "price": "25.44",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae harum voluptas, consequatur rem exercitationem reprehenderit laudantium nostrum magni? Natus repellat harum placeat quidem, beatae fuga ea eos nemo dolore qui!",
        "quantity": 0,
      },
    ]
  );
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`);
});