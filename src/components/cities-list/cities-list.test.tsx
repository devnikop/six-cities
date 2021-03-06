import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { CitiesList } from './cities-list';
import { citiesMock } from '../../mocks/mocksForTests';

it(`CitiesList correctly renders`, () => {
  const tree = renderer
    .create(<CitiesList
      cities={citiesMock}
      currentCity={citiesMock[0]}
      onCity={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

