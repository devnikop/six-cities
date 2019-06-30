import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import * as React from 'react';

import { offerMock } from '../../mocks/mocksForTests';
import { OfferPageType } from '../../types';

import OfferCard from './offer-card';

it(`Click on photo calls callback`, () => {
  const clickHandler = jest.fn();
  const linkPrevention = jest.fn();
  const offer = offerMock;

  const offerCard = mount(<MemoryRouter>
    <OfferCard
      changeActiveItem={clickHandler}
      handleBookmarkClick={jest.fn()}
      offer={offer}
      type={OfferPageType.MAIN}
    />
  </MemoryRouter>);

  const cardImageElement = offerCard.find(`.place-card__image-wrapper a`).at(0);
  cardImageElement.simulate(`click`, { preventDefault: linkPrevention });

  expect(clickHandler).toHaveBeenCalled();
  expect(linkPrevention).toHaveBeenCalled();
});

it(`Click on bookmark button calls callback`, () => {
  const clickHandler = jest.fn();
  const offer = offerMock;

  const offerCard = mount(<MemoryRouter>
    <OfferCard
      changeActiveItem={jest.fn()}
      handleBookmarkClick={clickHandler}
      offer={offer}
      type={OfferPageType.MAIN}
    />
  </MemoryRouter>);

  const element = offerCard.find(`.place-card__bookmark-button`).at(0);
  element.simulate(`click`);

  expect(clickHandler).toHaveBeenCalled();
});
