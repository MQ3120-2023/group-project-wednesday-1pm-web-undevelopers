import axios from 'axios';
import { useState, useEffect } from 'react';

const favoritesURL = 'http://localhost:3001/api/favorites/';

const AddToFavorites = () => { // Removed unused recipe prop
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        axios.get(favoritesURL)
            .then(response => {
                setFavorites(response.data);
            })
            .catch(error => {
                console.error("Error fetching favorites", error);
            });
    }, []);

    return (
        <div>
            <h2>Favorites:</h2>
            <ul>
                {favorites.map((favorite, index) => (
                    <li key={index}>{favorite.name}</li>  // Access name property
                ))}
            </ul>
        </div>
    );
};

export default AddToFavorites;
