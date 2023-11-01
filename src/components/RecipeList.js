// Importing necessary dependencies
import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styling/RecipeList.css";

// Importing styling utilities from Material-UI
import { styled } from "@mui/system";

// Custom styling for Pagination component
const WhitePagination = styled(Pagination)({
  "& .MuiButtonBase-root": {
    color: "#fff",
  },
  "& .Mui-selected": {
    backgroundColor: "#fff",
    color: "#333",
  },
});

// RecipeList component
const RecipeList = () => {
  // State for the search term, recipes, and current page
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 10;

   // New variables for categories
   const [categories, setCategories] = useState([]);
   const [selectedCategory, setSelectedCategory] = useState("");
   
 

    // Fetching the categories from the API
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
          setCategories(response.data.categories);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };
      fetchCategories();
    }, []);

   // Fetching  recipes based on the search term when it changes (inclues category now)
  // Existing useEffect for fetching recipes, modified to include category
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
        if (selectedCategory) {
          url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
        } else {
          url += searchTerm;
        }
        const response = await axios.get(url);
        setRecipes(response.data.meals || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchRecipes();
  }, [searchTerm, selectedCategory]);

  // Calculate the range of recipes to display on the current page
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  // Handle page change event
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  // Rendering the RecipeList component
  return (
    <div className="recipe-container">
      <h1>Search By Name</h1>
            {/* Dropdown for selecting a category */}
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Select a Category</option>
        {categories.map((category) => (
          <option key={category.idCategory} value={category.strCategory}>
            {category.strCategory}
          </option>
        ))}
      </select>
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
          <Link
            to={`/recipe/${r.idMeal}`}
            key={r.idMeal}
            className="recipe-link"
          >
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
          <Box
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            sx={{ margin: "20px 0px" }}
          >
            <WhitePagination
              className="buttons"
              count={Math.ceil(recipes.length / recipesPerPage)}
              onChange={handleChange}
            />
          </Box>
        </div>
      )}
    </div>
  );
};

// Exporting the RecipeList component
export default RecipeList;
