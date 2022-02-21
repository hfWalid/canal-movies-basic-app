import { createSelector } from "reselect";
import {reducerConstants} from "./constants";

const selectMovies = (state) => state.get('movies');

const makeSelectMoviesList = createSelector(selectMovies, (agents) =>
    agents.get(reducerConstants.moviesList) ? agents.get(reducerConstants.moviesList).toJS() : undefined,
)

export { selectMovies, makeSelectMoviesList };
