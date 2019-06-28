import { Provider } from 'react-redux';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { App } from './app';
import {
  leafletMock,
  offersArrayMock,
  citiesMock
} from '../../mocks/mocksForTests';

const getFilteredOffers = (city) =>
  offersArrayMock.filter((offer) =>
    offer.city === city);

describe(`App correctly renders`, () => {
  const initialState = {
    cities: [...new Set(offersArrayMock.map((it) => it.city))],
    currentCity: citiesMock[0],
    filteredOffers: getFilteredOffers(citiesMock[0]),
    offers: [],
  };

  const mockStore = configureStore();
  let store;
  let tree;

  it.skip(`App correctly renders`, () => {
    const leaflet = leafletMock;
    store = mockStore(initialState);

    tree = renderer
      .create(<Provider store={store}>
        <App
          // store={store}
          renderScreen={jest.fn()}
        /></Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
