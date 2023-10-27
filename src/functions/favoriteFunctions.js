import { db } from '../firebase';
import { collection, getDocs, addDoc, doc, deleteDoc, set, setDoc } from 'firebase/firestore';
import { useState } from 'react';

import { colRef } from '../App';

export const addFavorite = async (recipe) => {
    console.log("received")
    try{
        const favoriteRef = doc(colRef, recipe.idMeal);
        await setDoc(favoriteRef, { strMealThumb:  recipe.strMealThumb, strMeal: recipe.strMeal, idMeal: recipe.idMeal});
    } catch (error) {
        console.log(error);
    }

}

export const removeFavorite = async (id) => {
    const userDoc = doc(db, "favorites", id);
    await deleteDoc(userDoc);

}
