import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {ReviewList} from './reviews-list';

import {reviewsArrayMock} from '../../mocks/mocksForTests';

it(`ReviewList renders correctly`, () => {
  const tree = renderer
    .create(<ReviewList
      offerId={1}
      reviews={reviewsArrayMock}
      onLoadReviews={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
