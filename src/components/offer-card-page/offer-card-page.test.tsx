import { Provider } from 'react-redux';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';

import { offerMock, offersArrayMock, loginDataMock } from '../../mocks/mocksForTests';
import reduxStateMock from '../../mocks/reduxStateMock';

import OfferCardPage from './offer-card-page';

const mock = {
  match: {
    params: {
      id: 1
    }
  }
};

it.skip(`OfferCardPage renders correctly`, () => {
  const {
    match
  } = mock;

  const initialState = reduxStateMock;
  const mockStore = configureStore();
  const store = mockStore(initialState);

  const tree = renderer
    .create(<Provider store={store}>
      <OfferCardPage
        activeOfferId={0}
        handleBookmarkClick={jest.fn()}
        match={match}
        nearestOffers={offersArrayMock}
        offer={offerMock}
        user={loginDataMock}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
