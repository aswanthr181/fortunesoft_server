const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    backdrop: String,
    cast: [String],
    classification: String,
    director: { type: mongoose.Schema.Types.Mixed, required: true }, // Allow for single string or array of strings
    genres: [String],
    id: String,
    imdb_rating: Number,
    length: String,
    overview: String,
    poster: String,
    released_on: Date,
    slug: String,
    title: String
});

const Movie = mongoose.model('movies', movieSchema);

module.exports = Movie;
