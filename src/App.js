import logo from "./logo.png";
import "./App.css";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import IngredientSearch from "./components/IngredientSearch";
import Home from "./components/Home";
import Favorites from "./components/Favorites"; 

import { db } from './firebase';
import { collection, getDocs, addDoc, doc, deleteDoc, onSnapshot } from 'firebase/firestore';

import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const favURL = "http://localhost:3001/api/favorites";

export const colRef = collection(db, "favorites");

function App() {
  const [favorites, setFavorites] = useState([]);

  // useEffect(() => {
  //     const getFavorites = async () => {
  //         const data = await getDocs(colRef);
  //         setFavorites(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  //     }
  //     getFavorites();
  // }, []);

  onSnapshot(colRef, (snapshot) => {
    const data = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setFavorites(data);
    console.log(data);
  })


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
          <Route path="/favorites" element={<Favorites favorites={favorites}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
