import { actionTypes } from '../constants';
import {movieMock} from '../../utils/mocks';
import {getSelectedMovie, setSelectedMovie} from "../action";

describe('client display movie action', () => {
  test('should return a request to display a movie action', () => {

    const expectedResult = {
      type: actionTypes.GET_SELECTED_Movie,
      payload: movieMock,
    };
    expect(getSelectedMovie(movieMock)).toEqual(expectedResult);
  });

  test('should return a movie to display action', () => {
    const expectedResult = {
      type: actionTypes.SET_SELECTED_Movie,
      payload: movieMock,
    };
    expect(setSelectedMovie(movieMock)).toEqual(expectedResult);
  });
});
