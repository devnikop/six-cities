import * as React from 'react';
import * as renderer from 'react-test-renderer';

import MainPageEmpty from './main-page-empty';

it(`MainPageEmpty renders correctly`, () => {
  const currentCity = `Moscow`;

  const tree = renderer
    .create(<MainPageEmpty
      currentCity={currentCity}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
