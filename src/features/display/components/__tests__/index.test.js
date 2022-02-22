import React from 'react';
import { cleanup, render } from 'react-testing-library';
import {Provider} from "react-redux";
import configureStore from "../../../../store";
import Display from "../index";

jest.mock('react-router-dom', () => ({
    useLocation: () => ({
        push: jest.fn(),
    }),
}));

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('renders a single movie feature: display', () => {
    let store;
    beforeAll(() => {
        store = configureStore({});
    });

    test('renders display', async () => {
        const { asFragment } = render(
            <Provider store={store} >
                <Display />
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
