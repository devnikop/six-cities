import { Provider } from 'react-redux';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import {
  createNodeForMap,
  offersArrayMock,
} from '../../mocks/mocksForTests';
import reduxStateMock from '../../mocks/reduxStateMock';

import MainPage from './main-page';

it(`Welcome-screen correctly renders`, () => {
  const offers = offersArrayMock;

  const initialState = reduxStateMock;
  const mockStore = configureStore();
  const store = mockStore(initialState);

  const tree = renderer
    .create(<Provider store={store}>
      <MainPage
        activeOfferId={0}
        currentCity={offers[0].city.name}
        offers={offers}
      /></Provider>, createNodeForMap)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
