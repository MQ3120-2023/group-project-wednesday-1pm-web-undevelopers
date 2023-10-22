function addToFavorites(recipe) {
    // Get the current list of favorite recipes from local storage
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Check if the recipe is already in the favorites list
    let index = favorites.findIndex(fav => fav.id === recipe.id);

    if (index === -1) {
        // If the recipe is not already in the favorites list, add it
        favorites.push(recipe);

        // Save the updated favorites list to local storage
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}
