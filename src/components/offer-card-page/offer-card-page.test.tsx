import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { offerMock, offersArrayMock, loginDataMock } from '../../mocks/mocksForTests';

import { OfferCardPage } from './offer-card-page';

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

  const tree = renderer
    .create(<OfferCardPage
      activeOfferId={34}
      handleBookmarkClick={jest.fn()}
      match={match}
      nearestOffers={offersArrayMock}
      offer={offerMock}
      user={loginDataMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
