import { useState, useEffect } from 'react';
import axios from 'axios';

const GetRecipe = (id) => {
  // API URL for fetching recipe details
  const recipeURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

  // State variables for recipe data, loading status, and error message
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Use axios to make an asynchronous GET request to the MealDB API
    axios.get(recipeURL + id)
      .then(response => {
        console.log('API Response:', response.data);  // Good for debugging
        if (response.data.meals) {  // Check if meals data is present
          const mealInfo = response.data.meals[0];
          setRecipe(mealInfo);  // Set the recipe state with the fetched data
        } else {
          console.error('Meal not found for ID:', id);  // Log specific error
          setError('Meal not found.');  // Set error state
        }
        setLoading(false);  // Set loading to false after successfully fetching data
      })
      .catch(error => {
        console.error("Error fetching recipe:", error);  // Log error
        setError('Failed to fetch recipe details. Please try again later.');  // Set error state
        setLoading(false);  // Set loading to false after encountering an error
      });
  }, [id]);  // Dependency array ensures the effect runs when the 'id' prop changes

  // Return an object with recipe data, loading status, and error message
  return { recipe, loading, error };
}

export default GetRecipe;
