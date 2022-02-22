import React from 'react';
import { cleanup, render } from 'react-testing-library';
import Header from "../index";

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: jest.fn(),
    }),
}));

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('renders header', () => {
    test('renders header', async () => {
        const { asFragment } = render(<Header />,);
        expect(asFragment()).toMatchSnapshot();
    });
});
