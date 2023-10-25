import React from 'react';
import "../styling/Favourites.css";
import { removeFavorite } from '../functions/favoriteFunctions';

export default function Favorites({favorites}) {

    return (
        <div>
            <h1>Favourites</h1>
            <div className="favorites-container">
                {favorites.length === 0 ? (
                    <div className="emptyFavsList">
                        <p>There is nothing in the favorites list.</p>
                    </div>
                ) : (
                    favorites.map((fav) => (
                        <div key={fav.id} className="fav-card">
                            <img src={fav.strMealThumb} alt={fav.strMeal} className="fav-image" />
                            <h3 className="fav-name">{fav.strMeal}</h3>
                            <button className="fav-button" onClick={() => {removeFavorite(fav.id)}}>Remove</button>      
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}