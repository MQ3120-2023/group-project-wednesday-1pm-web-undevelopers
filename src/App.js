import logo from "./logo.svg";
import "./App.css";
import RecipeList from "./components/RecipeList";

import axios from "axios";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
      <h1>Idk how to fetch the api yet</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <h1>Our food shower</h1>
          <div className="nav-links">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/menu">Menu</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
