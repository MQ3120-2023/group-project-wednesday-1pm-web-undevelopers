import React from "react";
import "../styling/Favourites.css";
import { removeFavorite } from "../functions/favoriteFunctions";

// Favorites component
export default function Favorites({ favorites }) {
  return (
    <div className="favorites">
      <h1>Favourites</h1>
      {/* Display a message when the favorites list is empty */}
      {favorites.length === 0 ? (
        <div className="emptyFavsList">
          <p>There is nothing in the favourites list.</p>
        </div>
      ) : (
        // Display the favorites list
        <div className="favorites-container">
          {/* Map through each favorite and render a card for it */}
          {favorites.map((fav) => (
            <div key={fav.id} className="fav-card">
              <img
                src={fav.strMealThumb}
                alt={fav.strMeal}
                className="fav-image"
              />
              <h3 className="fav-name">{fav.strMeal}</h3>
              {/* Button to remove a favorite */}
              <button
                className="fav-button"
                onClick={() => {
                  removeFavorite(fav.id);
                }}
              >
                Remove
              </button>
              <p>{favorites.idMeal}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
