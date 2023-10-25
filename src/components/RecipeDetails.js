import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GetRecipe from '../functions/getRecipe';
import '../styling/RecipeDetails.css';
import { useState } from 'react';
import {MdOutlineFavoriteBorder, MdOutlineFavorite} from 'react-icons/md';
import { get } from 'mongoose';

import { addFavorite } from '../functions/favoriteFunctions';


const RecipeDetails = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [isFav, setIsFav] = useState(false);
    const [favorites, setFavorites] = useState([]);

    const { id } = useParams();
    const { recipe, loading, error } = GetRecipe(id);



    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    if (!recipe) {
        return <div className="error-message">Recipe not found.</div>;
    }

    // Extract ingredients and measures
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];
        if (ingredient && measure) {
            ingredients.push(`${ingredient} - ${measure}`);
        }
    }


    const UseBtnPressed = () => {

        if(!isFav){
            setIsClicked(!isClicked);
            addFavorite(recipe);
            console.log("sent")
            setIsFav(true);
        } else{
            alert("This recipe is already in your favorites!")
        }
    }

    return (
        <div className="recipe-details">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="meal-image" />
            <div className='title'>
                <h1 className="meal-name">{recipe.strMeal}</h1>
                <button className='fav-button' onClick={() => UseBtnPressed()}>
                    <span className='icon'>
                        {isClicked ? <MdOutlineFavorite size="30px"/> : <MdOutlineFavoriteBorder size="30px"/>}
                    </span>
                </button>
            </div>
            <h3>Ingredients:</h3>
            <ul className = "meal-ingredients"> 
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
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

export default RecipeDetails;
