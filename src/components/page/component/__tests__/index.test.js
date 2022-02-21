import React from 'react';
import { cleanup, render } from 'react-testing-library';
import Page from "../index";

jest.mock('react-router-dom', () => ({
    useLocation: () => ({
        push: jest.fn(),
    }),
}));

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('renders page', () => {
    test('renders page', async () => {
        const { asFragment } = render(<Page />,);
        expect(asFragment()).toMatchSnapshot();
    });
});
