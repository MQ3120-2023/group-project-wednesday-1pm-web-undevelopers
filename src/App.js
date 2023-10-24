import logo from "./logo.png";
import "./App.css";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import IngredientSearch from "./components/IngredientSearch";
import AddToFavorites from "./functions/addToFavorites";
import Home from "./components/Home";

import axios from "axios";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="MEALBROS" className="logo" />
          </Link>
          <div className="nav-links">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/recipe-search">Recipe Search</Link>
            <Link className="nav-link" to="/ingredient-search">Ingredient Search</Link>
            <Link className="nav-link" to="/favorites">Favorites</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ingredient-search" element={<IngredientSearch />} />
          <Route path="/recipe-search" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<AddToFavorites />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
