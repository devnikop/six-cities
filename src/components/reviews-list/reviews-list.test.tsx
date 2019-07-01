import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { reviewsArrayMock } from '../../mocks/mocksForTests';

import { ReviewList } from './reviews-list';

it(`ReviewList renders correctly`, () => {
  const tree = renderer
    .create(<ReviewList
      offerId={1}
      loadReviews={jest.fn()}
      reviews={reviewsArrayMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
