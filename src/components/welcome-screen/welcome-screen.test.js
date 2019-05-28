import React from 'react';
import renderer from 'react-test-renderer';

import {WelcomeScreen} from './welcome-screen.jsx';
import {offersArrayMock, leafletMock} from '../../mocks/mocksForTests';

it(`Welcome-screen correctly renders`, () => {
  const offers = offersArrayMock;
  const leaflet = leafletMock;

  const tree = renderer
    .create(<WelcomeScreen
      offers={offers}
      leaflet={leaflet}
      currentCity={offers[0].city}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
