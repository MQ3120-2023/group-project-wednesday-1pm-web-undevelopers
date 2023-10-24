import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/material';
import "../styling/RecipeList.css";

const IngredientSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 10;

  useEffect(() => {
    // Reset current page to 1 whenever the search term changes
    setCurrentPage(1);
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchTerm}`
        );
        setRecipes(response.data.meals || []);
        setError(null); // Clearing the error state if the call is successful
      } catch (error) {
        console.error("Error fetching data:", error);
        setError('Failed to fetch recipes. Please try again later.'); // Updating the error state
      }
    };
    fetchRecipes();
  }, [searchTerm]);

  // Logic to paginate recipes
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  }

  return (
    <div className="recipe-container"> {/* Updated the class name */}
      <h1>Search By Ingredient</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for recipes..."
      />
      {error ? (
        <p className="error-message">{error}</p>
      ) : recipes.length > 0 ? (
        currentRecipes.map((r) => (
          <Link
            to={`/recipe/${r.idMeal}`}
            key={r.idMeal}
            className="recipe-link"
          >
            <div className="recipe-card">
              <img src={r.strMealThumb} alt={r.strMeal} />
              <h2>{r.strMeal}</h2>
              {/* Add more details as needed */}
            </div>
          </Link>
        ))
      ) : (
        <p>No recipes found for {searchTerm}</p>
      )}

      {/* Pagination controls */}
      <div className="pagination">
        <Box justifyContent={"center"} alignItems={"center"} display={"flex"} sx={{margin: "20px 0px"}}>
          <Pagination className='buttons' count={Math.ceil(recipes.length / recipesPerPage)} onChange={handleChange}/>
        </Box>
      </div>
    </div>
  );
};

export default IngredientSearch;
