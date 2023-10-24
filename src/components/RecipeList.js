// import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/material';
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
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        console.log('Recipes Response:', response.data);  
        setRecipes(response.data.meals || []);  // recipes state
      } catch (error) {
        console.error("Error fetching data:", error);  
      }
    };
    fetchRecipes();  
  }, [searchTerm]);


  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  const handleChange = (event, value) => {
    setCurrentPage(value);
  }



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
          <Box justifyContent={"center"} alignItems={"center"} display={"flex"} sx={{margin: "20px 0px"}}>
            <Pagination className='buttons' count={Math.ceil(recipes.length / recipesPerPage)} onChange={handleChange}/>
          </Box>
        </div>
      )}
    </div>
  );
};

export default RecipeList;
