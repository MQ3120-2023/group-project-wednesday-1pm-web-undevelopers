const express = require("express");
const cors = require("cors");
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static('build'))


// Route for the root endpoint
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the backend</h1>");
});

// gets the static files from the build folder
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

// Setting up the server to listen on a specific port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
