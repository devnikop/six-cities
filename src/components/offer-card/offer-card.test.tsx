import { MemoryRouter } from 'react-router';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { offerMock } from '../../mocks/mocksForTests';

import OfferCard from './offer-card';

it(`OfferCard renders correctly`, () => {
  const offer = offerMock;

  const tree = renderer
    .create(<MemoryRouter>
      <OfferCard
        changeActiveItem={jest.fn()}
        handleBookmarkClick={jest.fn()}
        offer={offer}
      />
    </MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
