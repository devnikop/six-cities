import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.jsx';
import {offersArrayMock, leafletMock} from '../../mocks/mocksForTests';

it(`App correctly renders`, () => {
  const offers = offersArrayMock;
  const leaflet = leafletMock;

  const tree = renderer
    .create(<App
      offers={offers}
      leaflet={leaflet}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
