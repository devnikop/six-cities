import { Provider } from 'react-redux';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { offersArrayMock } from '../../mocks/mocksForTests';
import reduxStateMock from '../../mocks/reduxStateMock';

import Favorites from './favorites';

it(`Favorites correctly renders`, () => {
  const initialState = reduxStateMock;
  const mockStore = configureStore();
  const store = mockStore(initialState);

  const tree = renderer
    .create(<Provider store={store}>
      <Favorites
        offers={offersArrayMock}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
