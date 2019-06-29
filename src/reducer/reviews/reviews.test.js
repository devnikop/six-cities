import {
  reviewMock,
} from '../../mocks/mocksForTests';
import {
  ActionCreator,
  // Operation,
  // reducer,
} from './reviews';

describe(`Action Creators work correctly`, () => {
  it(`Reviews load correctly`, () => {
    expect(ActionCreator.loadReviews(reviewMock)).toEqual({
      type: `LOAD_REVIEWS`,
      payload: reviewMock,
    });
  });
});
