// @ts-ignore
import { combineReducers } from 'redux-immutable';
import moviesReducer from "./features/moviesList/store/reducer";

const rootReducer = combineReducers({
    movies: moviesReducer,
});

export default rootReducer;
