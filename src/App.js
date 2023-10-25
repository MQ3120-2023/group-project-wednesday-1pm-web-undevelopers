import logo from "./logo.png";
import "./App.css";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import IngredientSearch from "./components/IngredientSearch";
import AddToFavorites from "./functions/addToFavorites";
import Home from "./components/Home";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const favURL = "http://localhost:3001/api/favorites";
function App() {
  const [favorites, setFavorites] = useState([]);

  const onAddToFavorites = async (recipe) => {
    try{
      const response = await axios.post(favURL, {
        strMealThumb: recipe.strMealThumb,
        strMeal: recipe.strMeal,
        idMeal: recipe.idMeal
      });

      console.log("post", response.data);

      if(response.status === 200){
        const updatedMeal = response.data;
        // setFavorites([...favorites, updatedMeal]);
        
        const favResponse = await axios.get(favURL);

        console.log("get fav json", favResponse.data);

        // if(favorites.length <= 0){
        //   setFavorites(favResponse.data);
        // } else{
        //   setFavorites(...favorites, {strMealThumb: favResponse.data.strMealThumb, strMeal: favResponse.data.strMeal, idMeal: favResponse.data.idMeal})
        // }
        // console.log("this is favorites", favorites);
      }
      } catch (error){
      console.log("error", error);
    };


    // if(favorites.length <=0) {
    //   setFavorites([{strMealThumb: recipe.strMealThumb, strMeal: recipe.strMeal, idMeal: recipe.idMeal}])
    // } else if(favorites.map((fav) => fav.idMeal).includes(recipe.idMeal)){
    //   console.log("This recipe is already in your favorites!")
    // }
    // console.log(recipe);
    // console.log(favorites);
  }

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
          <Route path="/recipe/:id" element={<RecipeDetails onAddToFavorites={onAddToFavorites}/>} />
          <Route path="/favorites" element={<AddToFavorites />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
