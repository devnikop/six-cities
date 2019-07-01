import { Provider } from 'react-redux';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  createNodeForMap,
  loginDataMock,
  offerMock,
  offersArrayMock,
} from '../../mocks/mocksForTests';
import reduxStateMock from '../../mocks/reduxStateMock';

import { Operation } from '../../reducer/reviews/reviews';

import OfferCardPage from './offer-card-page';

Operation.loadReviews = () => (dispatch) => dispatch(jest.fn());

const mock = {
  match: {
    params: {
      id: 1
    }
  }
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = reduxStateMock;
const store = mockStore(initialState);

it(`OfferCardPage renders correctly`, () => {
  const {
    match
  } = mock;

  const tree = renderer
    .create(<Provider store={store}>
      <OfferCardPage
        activeOfferId={0}
        onBookmarkClick={jest.fn()}
        match={match}
        nearestOffers={offersArrayMock}
        offer={offerMock}
        user={loginDataMock}
      />
    </Provider>, createNodeForMap)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
