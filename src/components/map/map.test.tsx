import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {
  offersArrayMock,
  leafletMock
} from '../../mocks/mocksForTests';

import Map from './map';

it(`Map correctly renders`, () => {
  const leaflet = leafletMock;
  const offers = offersArrayMock;

  const tree = renderer
    .create(<Map
      activeOfferId={0}
      leaflet={leaflet}
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

