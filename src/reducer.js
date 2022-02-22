// @ts-ignore
import { combineReducers } from 'redux-immutable';
import moviesReducer from "./features/moviesList/store/reducer";
import displayReducer from "./features/display/store/reducer";

const rootReducer = combineReducers({
    movies: moviesReducer,
    display: displayReducer
});

export default rootReducer;
