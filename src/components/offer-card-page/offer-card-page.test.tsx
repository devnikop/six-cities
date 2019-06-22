import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {OfferCardPage} from './offer-card-page';
import {offerMock} from '../../mocks/mocksForTests';

const mock = {
  match: {
    params: {
      id: 1
    }
  }
};

it(`OfferCardPage renders correctly`, () => {
  const {
    match
  } = mock;

  const tree = renderer
    .create(<OfferCardPage
      match={match}
      offer={offerMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
