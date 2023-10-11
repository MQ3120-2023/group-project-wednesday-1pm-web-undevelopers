import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styling/RecipeList.css";


const RecipeList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 10;

  useEffect(() => {
    // Reset current page to 1 whenever the search term changes
    setCurrentPage(1);

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

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="recipe-container">
      <h1>Search By Name</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for recipes..."
      />
      {currentRecipes.length > 0 ? (
        currentRecipes.map((r) => (
          <Link to={`/recipe/${r.idMeal}`} key={r.idMeal} className="recipe-link">
            <div key={r.idMeal} className="recipe-card">
              <img src={r.strMealThumb} alt={r.strMeal} />
              <h2>{r.strMeal}</h2>
              {/* Add more details as needed */}
            </div>
          </Link>
        ))
      ) : (
        <p>No recipes found for {searchTerm}</p>
      )}

      {recipes.length > recipesPerPage && (
        <div className="pagination">
          {[...Array(Math.ceil(recipes.length / recipesPerPage))].map((_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
