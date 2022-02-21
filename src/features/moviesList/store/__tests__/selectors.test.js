import { fromJS } from 'immutable';
import { makeSelectMoviesList } from '../selector';
import { moviesListMock } from "../../utils/mocks";

describe('MoviesList Selectors', () => {
  let state;

  beforeAll(() => {
    state = fromJS({
      movies: {
        moviesList: moviesListMock,
      },
    });
  });
  test('should return MoviesList', () => {
    expect(makeSelectMoviesList(state)).toEqual(moviesListMock);
  });
});
