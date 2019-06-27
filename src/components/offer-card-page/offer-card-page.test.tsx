import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { offerMock, offersArrayMock } from '../../mocks/mocksForTests';

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
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
