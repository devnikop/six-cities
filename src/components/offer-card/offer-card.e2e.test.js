import {mount} from 'enzyme';
import React from 'react';

import {offerMock} from '../../mocks/mocksForTests';
import OfferCard from './offer-card.jsx';

it(`Click on photo calls callback`, () => {
  const clickHandler = jest.fn();
  const linkPrevention = jest.fn();
  const offer = offerMock;

  const offerCard = mount(<OfferCard
    offer={offer}
    onCardClick={clickHandler}
  />);

  const cardImageElement = offerCard.find(`.place-card__image-wrapper a`).at(0);
  cardImageElement.simulate(`click`, {preventDefault: linkPrevention});

  expect(clickHandler).toHaveBeenCalledTimes(1);
  expect(linkPrevention).toHaveBeenCalledTimes(1);
});

// it(`OfferCard's mouseEnter work correctly`, () => {
//   const {offer} = mock;
//   const hoverHandler = jest.fn();
//   const offerCard = mount(<OfferCard
//     offer={offer}
//     onCardHover={hoverHandler}
//   />);

//   const cardPlaceElement = offerCard.find(`.place-card`).at(0);
//   cardPlaceElement.simulate(`mouseover`);

//   expect(hoverHandler).toHaveBeenCalledTimes(1);
// });
