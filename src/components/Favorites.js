import React, {useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
import "../styling/Favourites.css";
import { removeFavorite } from "../functions/favoriteFunctions";
import { AuthContext } from "./auth/auth";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function Favorites() {
  const { userId } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);


  const handleRemoveClick = (event, id) => {
    event.stopPropagation();
    removeFavorite(id,userId);
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



