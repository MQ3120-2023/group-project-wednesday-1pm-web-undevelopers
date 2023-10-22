import axios from 'axios';
import { useState, useEffect } from 'react';

const AddToFavorites = (recipe) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        axios.post('/api/favorites', { recipe })
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
                    <li key={index}>{favorite}</li>
                ))}
            </ul>
        </div>
    );
};



export default AddToFavorites;
