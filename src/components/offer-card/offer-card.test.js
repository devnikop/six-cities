import React from 'react';
import renderer from 'react-test-renderer';

import {OfferCard} from './offer-card.jsx';

const mock = {
  offer: {
    placeName: `Beautiful & luxurious apartment at great location`,
    placeType: `Apartment`,
    isPremium: true,
    src: `img/apartment-01.jpg`,
    price: 120,
  },
};

it(`OfferCard renders correctly`, () => {
  const {offer} = mock;
  const tree = renderer
    .create(<OfferCard
      offer={offer}
      onCardNameClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
