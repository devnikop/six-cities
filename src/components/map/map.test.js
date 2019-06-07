import React from 'react';
import renderer from 'react-test-renderer';

import {Map} from './map.jsx';
import {offersArrayMock, leafletMock} from '../../mocks/mocksForTests';

it(`Map correctly renders`, () => {
  const leaflet = leafletMock;
  const offers = offersArrayMock;

  const tree = renderer
    .create(<Map
      leaflet={leaflet}
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

