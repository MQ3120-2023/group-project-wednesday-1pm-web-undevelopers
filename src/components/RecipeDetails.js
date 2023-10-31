import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GetRecipe from '../functions/getRecipe';
import '../styling/RecipeDetails.css';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import { addFavorite } from '../functions/favoriteFunctions';

// RecipeDetails component
const RecipeDetails = ({ favorites }) => {
    // State for button click and favorite status
    const [isClicked, setIsClicked] = useState(false);
    const [isFav, setIsFav] = useState(false);
    const [inFavorites, setInFavorites] = useState(false);

    // Getting recipe ID from URL parameters
    const { id } = useParams();

    // Fetching recipe data based on the ID
    const { recipe, loading, error } = GetRecipe(id);

    // Checking if the current recipe is in the user's favorites
    useEffect(() => {
        if (recipe && favorites.some(fav => fav.id === recipe.idMeal)) {
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
        if (inFavorites) {
            alert("This recipe is already in your favorites!");
        } else {
            setIsClicked(!isClicked);
            addFavorite(recipe);
            setIsFav(true);
        }
    }

    // Rendering the RecipeDetails component
    return (
        <div className="recipe-details">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="meal-image" />
            <div className='title'>
                <h1 className="meal-name">{recipe.strMeal}</h1>
                {/* Favorite button */}
                <button className='fav-button' onClick={() => handleBtnClick()}>
                    <span className='icon'>
                        {/* Displaying the appropriate favorite icon based on whether the recipe is in favorites */}
                        {inFavorites ? <MdOutlineFavorite size="30px"/> : <MdOutlineFavoriteBorder size="30px"/>}
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
                    {recipe.strInstructions.split("\r\n").map((instr, index) => (
                        instr.trim() ? <li key={index}>{instr}</li> : null
                    ))}
                </ol>
            </div>
        </div>
    );
};

// Exporting the RecipeDetails component
export default RecipeDetails;
