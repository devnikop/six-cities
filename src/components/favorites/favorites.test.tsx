import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { offersArrayMock } from '../../mocks/mocksForTests';

import Favorites from './favorites';

it.skip(`Favorites correctly renders`, () => {
  const tree = renderer
    .create(<Favorites
      offers={offersArrayMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
