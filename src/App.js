import logo from "./logo.svg";
import "./App.css";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import IngedientSearch from "./components/IngredientSearch";

import axios from "axios";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IngredientSearch from "./components/IngredientSearch";

const Home = () => {
  return (
    <div>
      <RecipeList />
    </div>
  );
};

const Menu = () => {
  return (
    <div>
      <IngedientSearch />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <h1>MEALBROS</h1>
          <div className="nav-links">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/Ingredient-Search">Ingredient Search</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ingredient-Search" element={<IngredientSearch />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
