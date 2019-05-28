import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.jsx';
import {leafletMock} from '../../mocks/mocksForTests';

it(`App correctly renders`, () => {
  const leaflet = leafletMock;

  const tree = renderer
    .create(<App
      leaflet={leaflet}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
