import logo from "./logo.png";
import "./App.css";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import IngredientSearch from "./components/IngredientSearch";
import AddToFavorites from "./functions/addToFavorites";
import Login from "./components/login";

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
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/ingredient-search">
              Ingredient Search
            </Link>
            <Link className="nav-link" to="/recipe-search">
              Recipe Search
            </Link>
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

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to MealBros!</h1>
      <Login />
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Mealbros is a fantastic app that helps you discover and organize your
          favorite recipes. Whether you're a cooking enthusiast or a beginner,
          Mealbros is here to make your cooking experience enjoyable and
          hassle-free.
        </p>
        <img
          src="https://picsum.photos/1000/400"
          alt="Delicious Meal"
          className="about-image"
        />
      </section>
      <section className="features-section">
        <h2>Key Features</h2>
        <div className="feature">
          <img src="https://picsum.photos/1000/250" alt="Feature 1" />
          <p>Explore a vast collection of recipes from various cuisines.</p>
        </div>
        <div className="feature">
          <img src="https://picsum.photos/1000/200" alt="Feature 2" />
          <p>Search for recipes based on ingredients you have at home.</p>
        </div>
      </section>
      <section className="how-it-works-section">
        <h2>How It Works</h2>
        <p>
          Mealbros uses advanced algorithms to recommend recipes based on your
          preferences. Simply search for recipes, save your favorites, and enjoy
          cooking delicious meals.
        </p>
      </section>
      <footer>Created by The Undevelopers</footer>
    </div>
  );
};

export default App;
