import { MemoryRouter } from 'react-router';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { offerMock } from '../../mocks/mocksForTests';
import { OfferPageType } from '../../types';

import OfferCard from './offer-card';

it(`OfferCard renders correctly`, () => {
  const offer = offerMock;

  const tree = renderer
    .create(<MemoryRouter>
      <OfferCard
        onActiveItem={jest.fn()}
        onBookmarkClick={jest.fn()}
        offer={offer}
        type={OfferPageType.MAIN}
      />
    </MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
