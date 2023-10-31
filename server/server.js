const express = require("express");
const cors = require("cors");
const fs = require("fs");
const session = require("express-session");

const app = express();
app.use(cors());
app.use(express.json());

// Session middleware
/*
app.use(
    session({
        secret: SECRET,
        resave: false,
        saveUninitialized: true,
    })
)
*/

const secretKey = process.env.JWT_SECRET;

// Route for the root endpoint
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the backend</h1>");
});

// Route to get details of a specific recipe by ID
app.get("/api/recipe/:id", (req, res) => {
  const id = req.params.id; // Extracting the recipe ID from the request parameters
  const recipe = data.recipe.find((r) => r.id === id); // Finding the recipe with the given ID in your data
  if (recipe) {
    res.json(recipe); // Sending the recipe as JSON if found
  } else {
    res.status(404).send("Recipe not found."); // Sending a 404 error if the recipe is not found
  }
});

// Route to get the list of favorite recipes
app.get("/api/favorites", (req, res) => {
  try {
    res.json(data.favorites); // Sending the list of favorite recipes as JSON
  } catch (error) {
    console.log(error);
  }
});

// Route to add a recipe to the list of favorites
app.post("/api/favorites", (req, res) => {
  const { strMealThumb, strMeal, idMeal } = req.body;

  const recipe = {
    strMealThumb: strMealThumb,
    strMeal: strMeal,
    idMeal: idMeal,
  };

  data.favorites.push(recipe); // Adding the recipe to the list of favorites
  res.json(recipe); // Sending the added recipe as JSON
});

// Setting up the server to listen on a specific port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
