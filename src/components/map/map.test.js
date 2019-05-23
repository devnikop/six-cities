import React from 'react';
import renderer from 'react-test-renderer';

import {Map} from './map.jsx';
import {offersArrayMock, leafletMock} from '../../mocks/mocksForTests';

it(`Map correctly renders`, () => {
  const offers = offersArrayMock;
  const leaflet = leafletMock;

  const tree = renderer
    .create(<Map
      offers={offers}
      leaflet={leaflet}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

