import {
  citiesMock,
} from './mocks/mocksForTests';
import {
  ActionCreators,
  reducer,
  getFilteredOffers
} from './reducer';

const mock = {
  filteredOffersMock: [
    {
      city: `Amsterdam`,
      placeName: `Beautiful & luxurious apartment at great location`,
      placeType: `Apartment`,
      isPremium: true,
      src: `img/apartment-01.jpg`,
      price: 120,
      coords: [52.3909553943508, 4.85309666406198],
    },
    {
      city: `Amsterdam`,
      placeName: `Nice, cozy, warm big bed apartment`,
      placeType: `Apartment`,
      isPremium: true,
      src: `img/apartment-03.jpg`,
      price: 180,
      coords: [52.3809553943508, 4.939309666406198],
    },
  ]
};

describe(`Business logic work correctly`, () => {
  it(`getFilteredOffers return filtered list`, () => {
    const {filteredOffersMock} = mock;

    expect(getFilteredOffers(citiesMock[0].name)).toEqual(filteredOffersMock);
  });
});


describe(`Action Creators work correctly`, () => {
  it(`City changed correctly`, () => {
    expect(ActionCreators.changeCity(citiesMock[1].name)).toEqual({
      type: `CHANGE_CITY`,
      payload: citiesMock[1].name,
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Should change city by a given city`, () => {
    const action = {
      type: `CHANGE_CITY`,
      payload: citiesMock[1].name,
    };

    expect(reducer({}, action)).toEqual({
      currentCity: citiesMock[1].name,
      filteredOffers: [{
        city: `Brussels`,
        placeName: `Canal View Prinsengracht`,
        placeType: `Apartment`,
        isPremium: false,
        src: `img/apartment-02.jpg`,
        price: 132,
        coords: [52.3909553943508, 4.929309666406198],
      }],
    });
  });
});


