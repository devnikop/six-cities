import React from 'react';
import renderer from 'react-test-renderer';

import Favorites from './favorites.jsx';

it(`Favorites correctly renders`, () => {
  const tree = renderer
    .create(<Favorites/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
