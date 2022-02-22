import { call, put } from 'redux-saga/effects';
import { request } from '../../../../utils/httpRequest/request';
import { Endpoints } from '../../../../utils/httpRequest/endpoints';
import { HTTP_METHOD } from '../../../../utils/httpRequest/constants';

import { actionTypes } from '../constants';
import { moviesListMock } from '../../utils/mocks';
import { getMovies } from '../saga';
import { setMoviesList } from '../action';

describe('MoviesList sagas', () => {
  test('should call request MoviesList saga', async () => {
    const pagination = {
      page: 0
    };
    const response = {
      status: 200,
      content: moviesListMock,
    };

    const action = {
      type: actionTypes.GET_MOVIES_LIST,
      payload: pagination,
    };

    const requestMoviesSaga = getMovies(action);

    expect(requestMoviesSaga.next().value).toEqual(
      call(
        request,
        Endpoints.moviesList(action.payload.page),
        HTTP_METHOD.GET,
      ),
    );

    expect(requestMoviesSaga.next(response).value).toEqual(
      put(setMoviesList(response.content)),
    );

    expect(requestMoviesSaga.next().done).toBeTruthy();
  });
});
