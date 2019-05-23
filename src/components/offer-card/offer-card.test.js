import React from 'react';
import renderer from 'react-test-renderer';

import {OfferCard} from './offer-card.jsx';
import {offerMock} from '../../mocks/mocksForTests';

it(`OfferCard renders correctly`, () => {
  const offer = offerMock;

  const tree = renderer
    .create(<OfferCard
      offer={offer}
      onCardNameClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
