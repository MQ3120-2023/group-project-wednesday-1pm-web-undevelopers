import { useState, useEffect } from 'react';
import axios from 'axios';

const recipeURL = '/api/recipe'

const GetRecipe = (id) => {

  const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        axios.get(recipeURL)
            .then(response => {
                setRecipe(response.data);
            })
            .catch(error => {
                console.error("Error recipes:", error);
            });
    }, []);

    //iterate over each recipe in the data array to look for the one with the matching id
    for (let index = 0; index < recipe.length; index++) {
        const currentRecipe = recipe[index];
      if (currentRecipe.id === id) {
        return currentRecipe;
      }
    }
    return null; // Recipe not found
}

export default GetRecipe;