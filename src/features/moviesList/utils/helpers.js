import {setSelectedMovie} from "../../display/store/action";
import Urls from "../../../common/constants/urls";

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

export const onClickRow = (id, movies, dispatch, history) => {
    const movieToDisplay = movies.find(
        (movie) => movie.id === id,
    );
    //TODO: Add Error management if id is duplicate
    dispatch(setSelectedMovie(movieToDisplay));
    history.push({
        pathname: Urls.display,
        search: `?movieId=${id}`,
    });
    return movieToDisplay.id;
};
