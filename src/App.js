// Importing necessary dependencies and components
import logo from "./logo-light.png";
import "./App.css";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import IngredientSearch from "./components/IngredientSearch";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import { logOut } from "./components/LoginPage";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

// Importing Firebase and Firestore related functionalities
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

// Importing Axios for HTTP requests and React hooks for state management
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./components/LoginPage";

// API endpoint for favorites
const favURL = "http://localhost:3001/api/favorites";

// Creating a reference to the 'favorites' collection in Firestore
export const colRef = collection(db, "favorites");

// Main App component
function App() {
  // State for user credentials
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for managing favorites and scrolling behavior
  const [favorites, setFavorites] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);

  // Listening for changes in the 'favorites' collection in Firestore
  onSnapshot(colRef, (snapshot) => {
    const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setFavorites(data);
  });

  // State for user authentication
  const [user, setUser] = useState(null);
  const auth = getAuth();

  // Effect to subscribe to authentication changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Unsubscribe when component unmounts
    return () => {
      unsubscribe();
    };
  }, [auth]);

  // Effect to handle scrolling behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Adding event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleaning up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Rendering the main component
  return (
    <div className={`App ${isScrolled ? "scrolled" : ""}`}>
      <Router>
        {/* Navigation bar */}
        <nav className="navbar">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="MEALBROS" className="logo" />
          </Link>
          {/* Navigation links */}
          <div className="nav-links">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/ingredient-search">
              Ingredient Search
            </Link>
            <Link className="nav-link" to="/favorites">
              Favourites
            </Link>
          </div>
          {/* Authentication links */}
          <div className="log-links">
            {user ? (
              <Link className="nav-link" to="/login" onClick={logOut}>
                <span>Sign Out <LogoutIcon /></span>
              </Link>
            ) : (
              <Link className="nav-link" to="/login">
                <span>Login <LoginIcon /></span>
              </Link>
            )}
          </div>
        </nav>

        {/* Routing configuration */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ingredient-search" element={<IngredientSearch />} />
          <Route
            path="/recipe/:id"
            element={<RecipeDetails favorites={favorites} />}
          />
          <Route
            path="/favorites"
            element={<Favorites favorites={favorites} />}
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
