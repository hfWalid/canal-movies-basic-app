import React from 'react';
import { cleanup, render } from 'react-testing-library';
import MoviesList from "../index";
import {Provider} from "react-redux";
import configureStore from "../../../../store";

jest.mock('react-router-dom', () => ({
    useLocation: () => ({
        push: jest.fn(),
    }),
}));

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('renders movies list feature', () => {
    let store;
    beforeAll(() => {
        store = configureStore({});
    });

    test('renders movies list feature', async () => {
        const { asFragment } = render(
            <Provider store={store} >
                <MoviesList />
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
