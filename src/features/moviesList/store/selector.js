import { createSelector } from "reselect";
import {reducerConstants} from "./constants";

const selectMoviesApiResponse = (state) => state.get('movies');

const makeSelectMoviesList = createSelector(selectMoviesApiResponse, (response) =>
    response.get(reducerConstants.moviesList) ? response.get(reducerConstants.moviesList).toJS() : undefined,
);

const makeSelectMoviesResult = createSelector(
    makeSelectMoviesList,
    (result) =>
        result ? {movies: result.results} : undefined,
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
