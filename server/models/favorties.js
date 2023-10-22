require("dotenv").config();

const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;

console.log('connecting to', url);

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => { 
        console.log('connected to MongoDB');
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message);
    });

const favoriteSchema = new mongoose.Schema({
    idMeal: String,
    strMeal: String,
    strMealThumb: String,
    strTags: String,
})

const Favorite = mongoose.model('Favorite', favoriteSchema)

const favorite = new Favorite({
    idMeal: '52772',
    strMeal: 'Spicy Arrabiata Penne',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',    
    strTags: 'Pasta,Curry',
})

favorite.save().then(result => {
    console.log('favorites saved!')
    mongoose.connection.close()
})