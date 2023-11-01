import { useParams } from "react-router-dom";
import GetRecipe from "../functions/getRecipe";
import "../styling/RecipeDetails.css";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { addFavorite } from "../functions/favoriteFunctions";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "./auth/auth";
import CustomMultiSelect from "./CustomMultiSelect";

// RecipeDetails component
const RecipeDetails = ({ favorites }) => {
  const { currentUser } = useContext(AuthContext);
  // State for button click and favorite status
  const [inFavorites, setInFavorites] = useState(false);

  // Getting recipe ID from URL parameters
  const { id } = useParams();

  // Fetching recipe data based on the ID
  const { recipe, loading, error } = GetRecipe(id);

  // Checking if the current recipe is in the user's favorites
  useEffect(() => {
    if (recipe && favorites.some((fav) => fav.id === recipe.idMeal)) {
      setInFavorites(true);
    } else {
      setInFavorites(false);
    }
  }, [favorites, recipe]);



  // Loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Error state
  if (error) {
    return <div className="error-message">{error}</div>;
  }

  // Recipe not found state
  if (!recipe) {
    return <div className="error-message">Recipe not found.</div>;
  }

  // Extracting and formatting ingredients
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && measure) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  // Handling favorite button click
  const handleBtnClick = () => {
    if (!currentUser) {
      alert("Please log in to add favorites.");
      return;
    }
    if (inFavorites) {
      alert("This recipe is already in your favorites!");
      return;
    }
  
    // Call addFavorite and wait for it to complete
    addFavorite(recipe, currentUser.uid)
      .then(() => {
        // Update inFavorites state to true after successful addition
        setInFavorites(true);
        // Optionally, show a success message to the user
        alert("Recipe added to favorites!");
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error adding to favorites:", error);
        alert("Failed to add recipe to favorites.");
      });
  };
  

  // Rendering the RecipeDetails component
  return (
    <div className="recipe-details">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="meal-image"
      />
      <div className="title">
        <h1 className="meal-name">{recipe.strMeal}</h1>
        {/* Favorite button */}
        <button className="fav-button" onClick={() => handleBtnClick()}>
          <span className="icon">
            {/* Displaying the appropriate favorite icon based on whether the recipe is in favorites */}
            {inFavorites ? (
              <MdOutlineFavorite size="30px" />
            ) : (
              <MdOutlineFavoriteBorder size="30px" />
            )}
          </span>
        </button>
      </div>
      <h3>Ingredients:</h3>
      {/* List of ingredients */}
      <ul className="meal-ingredients">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      {/* Recipe instructions */}
      <div className="meal-instructions">
        <ol>
          {recipe.strInstructions
            .split("\r\n")
            .map((instr, index) =>
              instr.trim() ? <li key={index}>{instr}</li> : null
            )}
        </ol>
      </div>
    </div>
  );
};

// Exporting the RecipeDetails component
export default RecipeDetails;
