import logo from './logo.svg';
import './App.css';
import RecipeList from './components/RecipeList';

import axios from 'axios'
import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"



const Home = () => {
  return(
    <div>
      <h1>Welcome we show food here</h1>
    </div>
  );

}

const Menu = () => {
  return (
    <div>
      <h1>Recipes</h1>
      <RecipeList searchQuery="chicken" /> {/* Provide the default search query or an empty string */}
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
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
      </Routes>
    </Router>
    </div>
  );


}

export default App;
