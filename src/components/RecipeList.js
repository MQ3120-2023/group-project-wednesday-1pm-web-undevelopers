import "../styling/RecipeList.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

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
        recipes.map((recipe) => (
          <div key={recipe.idMeal} className="recipe-card">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h2>{recipe.strMeal}</h2>
            {/* Add more details as needed */}
          </div>
        ))
      ) : (<p>No recipes found for {searchTerm}</p>)}
    </div>
  );
};

export default RecipeList;
