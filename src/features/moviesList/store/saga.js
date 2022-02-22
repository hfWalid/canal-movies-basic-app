import Saga from 'react-redux';
import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from "../../../utils/httpRequest/request";
import type { ApiResponse } from "../../../common/types/httpConstants";
import { Endpoints } from "../../../utils/httpRequest/endpoints";
import { HTTP_METHOD } from "../../../utils/httpRequest/constants";
import { setMoviesList } from './action';
import { actionTypes } from './constants';

export function* getMovies(action): Saga<void> {
    const { page } = action.payload;
    try {
        const response: ApiResponse = yield call(
            request,
            Endpoints.moviesList(page),
            HTTP_METHOD.GET,
        );
        yield put(setMoviesList(response));
    } catch (error) {
        // TODO: error management
        // eslint-disable-next-line no-console
        console.error(error);
    }
}

function* getMoviesSaga(): Saga<void> {
    yield takeLatest(actionTypes.GET_MOVIES_LIST, getMovies);
}

const sagas = [getMoviesSaga];

export default sagas;
