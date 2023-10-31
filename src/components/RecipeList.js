// Importing necessary dependencies
import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/material';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styling/RecipeList.css";

// Importing styling utilities from Material-UI
import { styled } from '@mui/system';

// Custom styling for Pagination component
const WhitePagination = styled(Pagination)({
  '& .MuiButtonBase-root': {
    color: '#fff',
  },
  '& .Mui-selected': {
    backgroundColor: '#fff',
    color: '#333'
  },
});

// RecipeList component
const RecipeList = () => {
  // State for the search term, recipes, and current page
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 10;

  // Fetch recipes based on the search term when it changes
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        console.log('Recipes Response:', response.data);  
        setRecipes(response.data.meals || []);  // Set recipes state
      } catch (error) {
        console.error("Error fetching data:", error);  
      }
    };
    fetchRecipes();  
  }, [searchTerm]);

  // Calculate the range of recipes to display on the current page
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  // Handle page change event
  const handleChange = (event, value) => {
    setCurrentPage(value);
  }

  // Rendering the RecipeList component
  return (
    <div className="recipe-container">
      <h1>Search By Name</h1>
      {/* Input for entering the search term */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for recipes..."
      />
      {/* Displaying the current recipes or a message if none are found */}
      {currentRecipes.length > 0 ? (
        currentRecipes.map((r) => (
          <Link to={`/recipe/${r.idMeal}`} key={r.idMeal} className="recipe-link">
            <div key={r.idMeal} className="recipe-card">
              <img src={r.strMealThumb} alt={r.strMeal} />
              <h2>{r.strMeal}</h2>
            </div>
          </Link>
        ))
      ) : (
        <p>No recipes found for {searchTerm}</p>
      )}

      {/* Displaying pagination if there are more recipes than the limit per page */}
      {recipes.length > recipesPerPage && (
        <div className="pagination">
          {/* Styling the Pagination component */}
          <Box justifyContent={"center"} alignItems={"center"} display={"flex"} sx={{margin: "20px 0px"}}>
            <WhitePagination className='buttons' count={Math.ceil(recipes.length / recipesPerPage)} onChange={handleChange}/>
          </Box>
        </div>
      )}
    </div>
  );
};

// Exporting the RecipeList component
export default RecipeList;
