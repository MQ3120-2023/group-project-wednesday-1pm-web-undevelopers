import { db } from "../firebase";
import {

  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";

// Function to add a recipe to favorites
export const addFavorite = async (userId, recipe) => {
  console.log("received");
  try {
    const favoriteRef = doc(db, "favorites", userId, recipe.idMeal); // Create a reference to the document with the recipe ID
    await setDoc(favoriteRef, {
      strMealThumb: recipe.strMealThumb,
      strMeal: recipe.strMeal,
      idMeal: recipe.idMeal,
    }); // Set the document data with the provided recipe details
  } catch (error) {
    console.log(error);
  }
};

// Function to remove a recipe from favorites
export const removeFavorite = async (userId, id) => {
  const userDoc = doc(db, "favorites", userId, "userFavorites", id); // Create a reference to the document with the recipe ID
  await deleteDoc(userDoc); // Delete the document with the provided ID
};
