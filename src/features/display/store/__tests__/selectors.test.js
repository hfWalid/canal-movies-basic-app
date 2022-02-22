import { fromJS } from 'immutable';
import {
    makeSelectMovie,
    selectMoviesApiResponse
} from '../selector';
import {movieMock} from "../../utils/mocks";

describe('selected movie Selector', () => {
    let state;

    beforeAll(() => {
        state = fromJS({
            display: {
                displayedMovie: movieMock
            }
        });
    });

    test('should return displayed movie reducer', () => {
        expect(selectMoviesApiResponse(state)).toEqual(fromJS({displayedMovie: movieMock}));
    });

    test('Should return movie to display', () => {
        expect(makeSelectMovie(state)).toEqual(movieMock)
    })
});
