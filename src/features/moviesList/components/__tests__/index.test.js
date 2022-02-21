import React from 'react';
import { cleanup, render } from 'react-testing-library';
import MoviesList from "../index";

jest.mock('react-router-dom', () => ({
    useLocation: () => ({
        push: jest.fn(),
    }),
}));

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('renders movies list feature', () => {
    test('renders movies list feature', async () => {
        const { asFragment } = render(<MoviesList />,);
        expect(asFragment()).toMatchSnapshot();
    });
});
