import React from 'react';
import renderer from 'react-test-renderer';

import {offerMock} from '../../mocks/mocksForTests';
import OfferCard from './offer-card.jsx';

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
