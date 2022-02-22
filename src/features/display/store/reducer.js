// @flow

import { fromJS } from "immutable";
import {actionTypes, reducerConstants} from "./constants";

export const initialState = fromJS({
    [reducerConstants.displayedMovie]: undefined
});

const displayReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.SET_SELECTED_Movie:
            return state.set(reducerConstants.displayedMovie, fromJS(action.payload));
        default:
            return state;
    }
};

export default displayReducer;
