import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {
  citiesMock,
  offersArrayMock
} from '../../mocks/mocksForTests';

import Favorites from './favorites';

it(`Favorites correctly renders`, () => {
  const cities = citiesMock;
  const getOffersOfCity = () => offersArrayMock;

  const tree = renderer
    .create(<Favorites
      cities={cities}
      getOffersOfCity={getOffersOfCity}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
