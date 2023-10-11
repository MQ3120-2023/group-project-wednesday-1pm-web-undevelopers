import "../styling/RecipeList.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        setRecipes(response.data.meals || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchRecipes();
  }, [searchTerm]);

  return (
    <div className="recipe-container">
      <h1>Recipes</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for recipes..."
      />
      {recipes.length > 0 ? (
        recipes.map((r) => (
          <Link to={`/recipe/` + r.idMeal} key={r.idMeal} className="recipe-link">
            <div key={r.idMeal} className="recipe-card">
              <img src={r.strMealThumb} alt={r.strMeal} />
              <h2>{r.strMeal}</h2>
              {/* Add more details as needed */}
            </div>
          </Link>
        ))
      ) : (<p>No recipes found for {searchTerm}</p>)}
    </div>
  );
};

export default RecipeList;
