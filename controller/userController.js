const movie=require('../model/movieSchema')

const fetchmovies=async(req,res)=>{
    console.log('fetchmoie');
    try {
        const movies=await movie.find({})

        const groupedMovies = {};
        movies.forEach((movie) => {
            movie.genres.forEach((genre) => {
                if (!groupedMovies[genre]) {
                    groupedMovies[genre] = [];
                }
                groupedMovies[genre].push({
                    director: movie.director,
                    imdb_rating: movie.imdb_rating,
                    length: movie.length,
                    poster: movie.poster,
                    title: movie.title,
                    slug: movie.slug
                });
            });
        });

        const formattedMovies = Object.keys(groupedMovies).map((genre) => {
            return {
                category: genre,
                movies: groupedMovies[genre]
            };
        });
        res.json({ status: true, result: formattedMovies });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports={fetchmovies}