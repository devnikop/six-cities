import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import React from 'react';
import renderer from 'react-test-renderer';

import {leafletMock, offersArrayMock} from '../../mocks/mocksForTests';
import {WelcomeScreen} from './welcome-screen.jsx';

const getFilteredOffers = (city) =>
  offersArrayMock.filter((offer) =>
    offer.city === city);

describe(`Welcome-screen correctly renders`, () => {
  const initialState = {
    cities: [...new Set(offersArrayMock.map((it) => it.city))],
    currentCity: offersArrayMock[0].city.name,
    filteredOffers: getFilteredOffers(offersArrayMock[0].city.name),
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
          currentCity={offers[0].city}
          leaflet={leaflet}
          offers={offers}
        /></Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
