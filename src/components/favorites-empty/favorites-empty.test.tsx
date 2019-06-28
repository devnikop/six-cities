import * as React from 'react';
import * as renderer from 'react-test-renderer';

import FavoriteEmpty from './favorites-empty';

it(`FavoriteEmpty renders correcty`, () => {
  const tree = renderer
    .create(<FavoriteEmpty/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
