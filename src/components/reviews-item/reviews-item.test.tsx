import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { reviewMock } from '../../mocks/mocksForTests';

import ReviewItem from './reviews-item';

it(`ReviewItem renders correctly`, () => {
  const tree = renderer
    .create(<ReviewItem
      review={reviewMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
