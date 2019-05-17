import React from 'react';
import {shallow} from 'enzyme';

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

it(`OfferCard's button work correctly`, () => {
  const {offer} = mock;
  const clickHandler = jest.fn();
  const offerCard = shallow(<OfferCard
    offer={offer}
    onCardNameClick={clickHandler}
  />);

  const cardNameElements = offerCard.find(`.place-card__name`).at(0);
  cardNameElements.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});

// пункт 7, надо переделать тест под него
