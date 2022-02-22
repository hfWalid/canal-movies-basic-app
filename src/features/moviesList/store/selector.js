import { createSelector } from "reselect";
import {reducerConstants} from "./constants";
import {__formatMovies} from "../utils/helpers";

const selectMoviesApiResponse = (state) => state.get('movies');

const makeSelectMoviesList = createSelector(selectMoviesApiResponse, (response) =>
    response.get(reducerConstants.moviesList) ? response.get(reducerConstants.moviesList).toJS() : undefined,
);

const makeSelectMoviesResult = createSelector(
    makeSelectMoviesList,
    (result) =>
        result && result.results ? __formatMovies(result.results)
        : undefined,
);

const makeSelectMoviesOtherResult = createSelector(
    makeSelectMoviesList,
    (result) =>
    result ? {
        page: result.page,
        totalPages: result.totalPages,
        totalResults: result.totalResults
    } : undefined,
);

export {
    selectMoviesApiResponse,
    makeSelectMoviesList,
    makeSelectMoviesResult,
    makeSelectMoviesOtherResult
};
