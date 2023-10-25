import { db } from '../firebase';
import { collection, getDocs, addDoc, doc, deleteDoc, set } from 'firebase/firestore';
import { useState } from 'react';

import { colRef } from '../App';
import { useEffect } from 'react';

export const addFavorite = async (recipe) => {
    console.log("received")
    await addDoc(colRef, { strMealThumb:  recipe.strMealThumb, strMeal: recipe.strMeal, idMeal: recipe.idMeal});

}

export const removeFavorite = async (id) => {
    const userDoc = doc(db, "favorites", id);
    await deleteDoc(userDoc);

}
