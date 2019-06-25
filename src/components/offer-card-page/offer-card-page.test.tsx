import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {OfferCardPage} from './offer-card-page';
import {offerMock, offersArrayMock} from '../../mocks/mocksForTests';

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
      match={match}
      nearestOffers={offersArrayMock}
      offer={offerMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
