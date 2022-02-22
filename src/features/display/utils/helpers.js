export const __formatMovies = (movies) => {
    return movies.map((movie) => (
        {
            id: movie.id,
            original_language: movie.original_language,
            title: movie.title,
            vote_average: movie.vote_average,
            vote_count: movie.vote_count,
            overview: movie.overview,
            release_date: movie.release_date,
            poster_path: movie.poster_path
        }
    ))
};
