import { Provider } from 'react-redux';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import reduxStateMock from '../../mocks/reduxStateMock';

import App from './app';

it(`App correctly renders`, () => {
  const initialState = reduxStateMock;
  const mockStore = configureStore();
  const store = mockStore(initialState);

  const tree = renderer
    .create(<Provider store={store}>
      <App
        renderScreen={jest.fn()}
      /></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
