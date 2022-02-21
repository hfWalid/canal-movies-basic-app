// @flow

import { fromJS } from "immutable";
import {actionTypes, reducerConstants} from "./constants";

export const initialState = fromJS({
    [reducerConstants.moviesList]: undefined
});

const moviesReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.SET_MOVIES_LIST:
            return state.set(reducerConstants.moviesList, fromJS(action.payload));
        default:
            return state;
    }
};

export default moviesReducer;
