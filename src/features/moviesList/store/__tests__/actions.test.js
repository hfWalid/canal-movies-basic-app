import { actionTypes } from '../constants';
import { getMoviesList, setMoviesList } from '../action';
import { moviesListMock } from '../../utils/mocks';

describe('client MoviesList action', () => {
  test('should return a request MoviesList action', () => {
    const pagination = {
      page: 0
    };
    const expectedResult = {
      payload: pagination,
      type: actionTypes.GET_MOVIES_LIST,
    };
    expect(getMoviesList(pagination)).toEqual(expectedResult);
  });

  test('should return a set MoviesList action', () => {
    const expectedResult = {
      type: actionTypes.SET_MOVIES_LIST,
      payload: moviesListMock,
    };
    expect(setMoviesList(moviesListMock)).toEqual(expectedResult);
  });
});
