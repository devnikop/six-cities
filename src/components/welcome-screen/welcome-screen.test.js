import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import {WelcomeScreen} from './welcome-screen.jsx';
import {leafletMock, offersArrayMock, citiesMock} from '../../mocks/mocksForTests';

const getFilteredOffers = (city) =>
  offersArrayMock.filter((offer) =>
    offer.city === city);

describe(`Welcome-screen correctly renders`, () => {
  const initialState = {
    currentCity: citiesMock[0].name,
    filteredOffers: getFilteredOffers(citiesMock[0].name),
    cities: [...new Set(offersArrayMock.map((it) => it.city))]
  };

  const mockStore = configureStore();
  let store;
  let tree;

  it(`Welcome-screen correctly renders`, () => {
    const leaflet = leafletMock;
    const offers = offersArrayMock;

    store = mockStore(initialState);

    tree = renderer
      .create(<Provider store={store}>
        <WelcomeScreen
          offers={offers}
          leaflet={leaflet}
          currentCity={offers[0].city}
        /></Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
