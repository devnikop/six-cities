import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import {App} from './app.jsx';
import {leafletMock, offersArrayMock, citiesMock} from '../../mocks/mocksForTests';

const getFilteredOffers = (city) =>
  offersArrayMock.filter((offer) =>
    offer.city === city);

describe(`App correctly renders`, () => {
  const initialState = {
    currentCity: citiesMock[0].name,
    filteredOffers: getFilteredOffers(citiesMock[0].name),
    cities: [...new Set(offersArrayMock.map((it) => it.city))]
  };

  const mockStore = configureStore();
  let store;
  let tree;

  it(`App correctly renders`, () => {
    const leaflet = leafletMock;
    store = mockStore(initialState);

    tree = renderer
      .create(<Provider store={store}>
        <App
          store={store}
          leaflet={leaflet}
        /></Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


