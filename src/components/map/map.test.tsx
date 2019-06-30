import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {
  createNodeForMap,
  offersArrayMock,
} from '../../mocks/mocksForTests';

import Map from './map';



it(`Map correctly renders`, () => {
  const offers = offersArrayMock;

  const tree = renderer
    .create(<Map
      activeOfferId={0}
      offers={offers}
    />, createNodeForMap)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

