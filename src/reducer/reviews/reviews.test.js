import {configureAPI} from '../../api';
import MockAdapter from 'axios-mock-adapter';

import {adaptedReviewsArrayMock} from '../../mocks/adaptedMocks';
import {reviewsArrayMock} from '../../mocks/mocksForTests';
import {rawReviewsArrayMock} from '../../mocks/rawMocks';

import {
  ActionCreator,
  ActionType,
  Operation,
  reducer,
} from './reviews';

const ActionsMock = {
  setReviewsAction: {
    type: ActionType.SET_REVIEWS,
    payload: reviewsArrayMock,
  },

  undefinedAction: {
    type: `UNDEFINED`,
    payload: ``,
  },
};

const initialStateMock = {
  reviews: reviewsArrayMock,
};

describe(`Action Creators work correctly`, () => {
  it(`Reviews load correctly`, () => {
    const action = ActionsMock.setReviewsAction;

    expect(ActionCreator.setReviews(action.payload))
      .toEqual(action);
  });
});

describe(`Operation works correctly`, () => {
  it(`Should make a correct API call to /comments`, () => {
    const id = 0;

    const reviewsLoader = Operation.loadReviews(id);
    const serverAnswer = rawReviewsArrayMock;

    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);

    apiMock
      .onGet(`/comments/${id}`)
      .reply(200, serverAnswer);

    return reviewsLoader(dispatch, jest.fn(), api)
      .then(() => {
        const adaptedReviews = adaptedReviewsArrayMock;

        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_REVIEWS,
          payload: adaptedReviews,
        });
      });
  });

  it(`Should make a correct API call to /comments`, () => {
    const offerId = 0;
    const formData = {
      comment: ``,
      rating: 1,
    };

    const reviewsLoader = Operation.postReview(offerId, formData);
    const serverAnswer = rawReviewsArrayMock;

    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);

    apiMock
      .onPost(`/comments/${offerId}`, formData)
      .reply(200, serverAnswer);

    return reviewsLoader(dispatch, jest.fn(), api)
      .then(() => {
        const adaptedReviews = adaptedReviewsArrayMock;

        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_REVIEWS,
          payload: adaptedReviews,
        });
      });
  });
});

describe(`Reducer works correctly`, () => {
  const state = initialStateMock;

  it(`Should set reviews by a given reviews`, () => {
    const action = ActionsMock.setReviewsAction;

    expect(reducer(state, action))
      .toEqual(Object.assign({}, state, {
        reviews: action.payload,
      }));
  });

  it(`Should return state if action type undefined`, () => {
    const action = ActionsMock.undefinedAction;

    expect(reducer(state, action))
      .toEqual(state);
  });
});
