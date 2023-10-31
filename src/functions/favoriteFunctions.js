import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { useState } from "react";

import { colRef } from "../App";

// Function to add a recipe to favorites
export const addFavorite = async (recipe) => {
  console.log("received");
  try {
    const favoriteRef = doc(colRef, recipe.idMeal); // Create a reference to the document with the recipe ID
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
export const removeFavorite = async (id) => {
  const userDoc = doc(db, "favorites", id); // Create a reference to the document with the recipe ID
  await deleteDoc(userDoc); // Delete the document with the provided ID
};
