import { actionTypes } from'./constants';

export const getSelectedMovie = (payload) => ({
    type: actionTypes.GET_SELECTED_Movie,
    payload,
});

export const setSelectedMovie = (payload) => ({
    type: actionTypes.SET_SELECTED_Movie,
    payload,
});
