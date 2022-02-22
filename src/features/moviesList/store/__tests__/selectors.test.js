import { fromJS } from 'immutable';
import {makeSelectMoviesList, makeSelectMoviesOtherResult} from '../selector';
import {apiOtherResults, moviesListMock} from "../../utils/mocks";

describe('MoviesList Selectors', () => {
  let state;

  beforeAll(() => {
    state = fromJS({
      movies: {
        moviesList: {
          ...moviesListMock,
          ...apiOtherResults
        }
      }
    });
  });
  test('should return MoviesList', () => {
    expect(makeSelectMoviesList(state)).toEqual({
      ...moviesListMock,
      ...apiOtherResults
    });
  });
  test('should return other characteristics of api response: page, totalPages and totalResults', () => {
    expect(makeSelectMoviesOtherResult(state)).toEqual(apiOtherResults);
  })
});
