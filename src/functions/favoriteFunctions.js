import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
//import { useState } from "react";

//import { colRef } from "../App";

// Function to add a recipe to favorites
export const addFavorite = async (recipe, userId) => {
  if (!userId){
    console.error("Üser ID is undefined");
    return;
  }
  
  console.log("Adding to favorites");
  try {
    const userFavRef = doc(db, "users", userId, "favorites", recipe.idMeal);

    // Set the document data with the provided recipe details
    await setDoc(userFavRef, {
      strMealThumb: recipe.strMealThumb,
      strMeal: recipe.strMeal,
      idMeal: recipe.idMeal,
    });

    console.log("Recipe added to favorites");
  } catch (error) {
    console.error("Error adding favorite: ", error);
  }
};

// Function to remove a recipe from favorites
export const removeFavorite = async (id, userId) => {
  if (!userId){
    console.error("Üser ID is undefined");
    return;
  }
  
  try {
    // Create a reference to the specific favorite in the user's collection
    const userFavRef = doc(db, "users", userId, "favorites", id);

    // Delete the document
    await deleteDoc(userFavRef);

    console.log("Recipe removed from favorites");
  } catch (error) {
    console.error("Error removing favorite: ", error);
  }
};
