import { useState, useEffect } from 'react';
import axios from 'axios';

const GetRecipe = (id) => {
  const recipeURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(recipeURL + id)
      .then(response => {
        console.log('API Response:', response.data);  // Good for debugging
        if (response.data.meals) {  // Check if meals data is present
          const mealInfo = response.data.meals[0];
          setRecipe(mealInfo);
        } else {
          console.error('Meal not found for ID:', id);  // Log specific error
          setError('Meal not found.');  // Set error state
        }
        setLoading(false);  // Set loading to false after fetching data
      })
      .catch(error => {
        console.error("Error fetching recipe:", error);  // Log error
        setError('Failed to fetch recipe details. Please try again later.');  // Set error state
        setLoading(false);  // Set loading to false after error
      });
  }, [id]);

  return { recipe, loading, error };  // Return states
}

export default GetRecipe;
