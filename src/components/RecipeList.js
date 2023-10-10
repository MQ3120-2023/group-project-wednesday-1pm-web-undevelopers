import React, { useState, useEffect } from "react";
import axios from "axios";

const RecipeList = ({ searchQuery }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
        );
        setRecipes(response.data.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetch recipes when searchQuery changes
    fetchRecipes();
  }, [searchQuery]);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.map((recipe) => (
        <div key={recipe.idMeal}>
          <h3>{recipe.strMeal}</h3>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
