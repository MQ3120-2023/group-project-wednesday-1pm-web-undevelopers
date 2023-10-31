import React from "react";
import { Link } from "react-router-dom";
import "../styling/Favourites.css";
import { removeFavorite } from "../functions/favoriteFunctions";

export default function Favorites({ favorites }) {
  const handleRemoveClick = (event, id) => {
    event.stopPropagation();
    removeFavorite(id);
  };

  return (
    <div className="favorites">
      <h1>Favourites</h1>
      {favorites.length === 0 ? (
        <div className="emptyFavsList">
          <p>There is nothing in the favourites list.</p>
        </div>
      ) : (
        <div className="favorites-container">
          {favorites.map((fav) => (
            <div key={fav.id} className="fav-card">
              <Link to={`/recipe/${fav.id}`} className="fav-content">
                <img
                  src={fav.strMealThumb}
                  alt={fav.strMeal}
                  className="fav-image"
                />
                <h3 className="fav-name">{fav.strMeal}</h3>
              </Link>
              <button
                className="fav-button"
                onClick={(event) => handleRemoveClick(event, fav.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

