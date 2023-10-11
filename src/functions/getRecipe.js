import { useState, useEffect } from 'react';
import axios from 'axios';

const GetRecipe = (id) => {
    const recipeURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        axios.get(recipeURL + id)
            .then(response => {
                // Extracting the first meal information from the meals array
                const mealInfo = response.data.meals && response.data.meals[0];
                setRecipe(mealInfo);
            })
            .catch(error => {
                console.error("Error fetching recipe:", error);
            });
    }, [id]);
    return recipe ;

}

export default GetRecipe;