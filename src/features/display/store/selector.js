import { createSelector } from "reselect";
import {reducerConstants} from "./constants";

const selectMoviesApiResponse = (state) => state.get('display');

const makeSelectMovie = createSelector(selectMoviesApiResponse, (response) =>
    response.get(reducerConstants.displayedMovie)
        ? response.get(reducerConstants.displayedMovie).toJS()
        : undefined,
);

export {
    selectMoviesApiResponse,
    makeSelectMovie
};
