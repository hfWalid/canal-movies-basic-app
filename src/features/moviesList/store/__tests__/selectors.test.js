import { fromJS } from 'immutable';
import {makeSelectMoviesList, makeSelectMoviesOtherResult, makeSelectMoviesResult} from '../selector';
import {apiOtherResults, moviesListMock, responseMock} from "../../utils/mocks";
import {__formatMovies} from "../../utils/helpers";

describe('MoviesList Selectors', () => {
  let state;

  beforeAll(() => {
    state = fromJS({
      movies: {
        moviesList: responseMock
      }
    });
  });

  test('should return api response results', () => {
    expect(makeSelectMoviesList(state)).toEqual(responseMock);
  });

  test('Should return MoviesList formatted', () => {
    expect(makeSelectMoviesResult(state)).toEqual(__formatMovies(moviesListMock))
  })

  test('should return other characteristics of api response: page, totalPages and totalResults', () => {
    expect(makeSelectMoviesOtherResult(state)).toEqual(apiOtherResults);
  })
});
