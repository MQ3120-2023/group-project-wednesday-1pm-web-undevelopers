import { useParams } from "react-router-dom";

import GetRecipe from "../functions/getRecipe";
import "../styling/RecipeDetails.css";

const RecipeDetails = () => {
  const { id } = useParams();
  console.log('Recipe ID:', id);  // Log the recipe ID
  const { recipe, loading, error } = GetRecipe(id);
  console.log('Recipe Data:', recipe);  // Log the fetched recipe data
  
    if (!recipe) {
      return <div className="error-message">Recipe not found.</div>;
    }
  
    return (
      <div className="recipe-details">
        <img src={recipe.strMealThumb} alt={recipe.title} className="meal-image" />
        <ul className="recipe-info">
          <li className="product-name">{recipe.strMeal}</li>
          <li><button className="add-to-favorites">Add to Favorites</button></li>
        </ul>
      </div>
    );
};



export default RecipeDetails;