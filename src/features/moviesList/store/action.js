import { actionTypes } from "./constants";

export const getMoviesList = (payload) => ({
    type: actionTypes.GET_MOVIES_LIST,
    payload,
});

export const setMoviesList = (payload) => ({
    type: actionTypes.SET_MOVIES_LIST,
    payload,
});
