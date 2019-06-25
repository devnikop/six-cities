import * as React from 'react';
import * as renderer from 'react-test-renderer';

import ReviewItem from './reviews-item';

import {reviewMock} from '../../mocks/mocksForTests';

it(`ReviewItem renders correctly`, () => {
  const tree = renderer
    .create(<ReviewItem
      review={reviewMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
