import logo from "./logo-light.png";
import "./App.css";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import IngredientSearch from "./components/IngredientSearch";
import Home from "./components/Home";
import Favorites from "./components/Favorites"; 
import { logOut } from "./components/LoginPage";

import { db } from './firebase';
import { collection, getDocs, addDoc, doc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./components/LoginPage";

const favURL = "http://localhost:3001/api/favorites";

export const colRef = collection(db, "favorites");

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [favorites, setFavorites] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  
  onSnapshot(colRef, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setFavorites(data);
  })

  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
  
    <div className={`App ${isScrolled ? 'scrolled' : ''}`}>
      <Router>
        <nav className="navbar">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="MEALBROS" className="logo" />
          </Link>
          <div className="nav-links">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/ingredient-search">Ingredient Search</Link>
            <Link className="nav-link" to="/favorites">Favourites</Link>
          </div>
          <div className="log-links">
            {user ? (
              <Link className="nav-link" to="/login" onClick={logOut}>Sign Out</Link>
            ) : (
              <Link className="nav-link" to="/login" >Login</Link>
            )}
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ingredient-search" element={<IngredientSearch />} />
          <Route path="/recipe/:id" element={<RecipeDetails favorites={favorites}/>} />
          <Route path="/favorites" element={<Favorites favorites={favorites}/>} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
