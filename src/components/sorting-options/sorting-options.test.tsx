import * as React from 'react';
import * as renderer from 'react-test-renderer';

import SortingOptions from './sorting-options';

it(`SortingOptions renders correctly`, () => {
  const tree = renderer
    .create(<SortingOptions
      handleSelectChange={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
