import React from 'react';
import renderer from 'react-test-renderer';

import {WelcomeScreen} from './welcome-screen.jsx';

const mock = {
  offers: [
    {
      placeName: `Beautiful & luxurious apartment at great location`,
      placeType: `Apartment`,
      isPremium: true,
      src: `img/apartment-01.jpg`,
      price: 120,
    },
    {
      placeName: `Wood and stone place`,
      placeType: `Private room`,
      isPremium: false,
      src: `img/room.jpg`,
      price: 80,
    },
    {
      placeName: `Canal View Prinsengracht`,
      placeType: `Apartment`,
      isPremium: false,
      src: `img/apartment-02.jpg`,
      price: 132,
    },
    {
      placeName: `Nice, cozy, warm big bed apartment`,
      placeType: `Apartment`,
      isPremium: true,
      src: `img/apartment-03.jpg`,
      price: 180
    }
  ]
};

it(`Welcome-screen correctly renders`, () => {
  const {offers} = mock;
  const tree = renderer
    .create(<WelcomeScreen
      offers={offers}
      onCardNameClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
