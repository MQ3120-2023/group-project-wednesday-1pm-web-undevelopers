import logo from "./logo.png";
import "./App.css";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import IngedientSearch from "./components/IngredientSearch";
import AddToFavorites from "./functions/addToFavorites";

import axios from "axios";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IngredientSearch from "./components/IngredientSearch";

const Home = () => {
  return (
    <div>
      <login />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <a className="navbar-brand" href="/">
            <div className="logo-image">
              <img src={logo} alt="MEALBROS" className="logo" />
            </div>
          </a>
          <div className="nav-links">
            <div className="nav-link1">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </div>
            <div className="nav-link2">
              <Link className="nav-link" to="/ingredient-search">
                Ingredient Search
              </Link>
            </div>
            <div className="nav-link2">
              <Link className="nav-link" to="/recipe-search">
                Recipe Search 
              </Link>
            </div>
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
