import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Favorites from './favorites';

it(`Favorites correctly renders`, () => {
  const tree = renderer
    .create(<Favorites />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
