import React from 'react';
import { Provider } from 'react-redux';
import { cleanup, render } from 'react-testing-library';
import App from './App';
import configureStore from './store';

afterEach(cleanup);

describe('renders app entry', () => {
  let store;

  beforeAll(() => {
    store = configureStore({});
  });

  test('renders app entry', async () => {
    const { asFragment } = render(
        <Provider store={store}>
          <App />
        </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

