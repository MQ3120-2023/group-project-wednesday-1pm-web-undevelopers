const express = require('express');
const cors = require('cors');
const fs = require('fs');
const sesmanage = require('express-session'); 

const app = express();
app.use(cors());
app.use(express.json());

app.use(
    session({
        secret: JWT_SECRET,
        resave: false,
        saveUninitialized: true,
    })
)
const rawData = fs.readFileSync("server/tempFavorites.json");
const data = JSON.parse(rawData);

const secretKey = process.env.JWT_SECRET;

app.get("/", (req, res) => {
    res.send('<h1>Welcome to the backend</h1>');
});


app.get("/api/recipe/:id", (req, res) => {
    const id = req.params.id; // The id is a string, so we need to convert it to a number
    const recipe = data.recipe.find(r => r.id === id); // Find the product with the given id  returns true or false
    if (recipe) {
        res.json(recipe); // if true send the product as JSON
    } else {
        res.status(404).send("Product not found."); // if false send a 404 error
    }
});

app.get("/api/favorites", (req, res) => {
    res.json(data.favorites);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});