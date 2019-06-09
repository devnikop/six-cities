import {configureAPI} from './api';
import MockAdapter from 'axios-mock-adapter';

import {
  citiesMock,
  offersArrayMock,
} from './mocks/mocksForTests';
import {
  ActionCreator,
  getFilteredOffers,
  Operation,
  reducer,
} from './reducer';

const mock = {
  filteredOffersMock: [
    {
      bedrooms: 1,
      city: {
        coords: [50.846557, 4.351697],
        zoom: 13,
        name: `Paris`,
      },
      description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed`,
      goods: [],
      host: {},
      id: 1,
      images: [],
      isFavorite: false,
      isPremium: true,
      maxAdults: 3,
      place: {
        coords: [50.846557, 4.351697],
        zoom: 16,
      },
      previewImage: `https://es31-server.appspot.com/six-cities/static/hotel/19.jpg`,
      price: 80,
      rating: 1.5,
      title: `Wood and stone place`,
      type: `apartment`,
    },
  ]
};

describe(`Business logic work correctly`, () => {
  it(`getFilteredOffers return filtered list`, () => {
    const {filteredOffersMock} = mock;

    expect(getFilteredOffers(offersArrayMock, citiesMock[0])).toEqual(filteredOffersMock);
  });
});


describe(`Action Creators work correctly`, () => {
  it(`City changed correctly`, () => {
    expect(ActionCreator.changeCity(citiesMock[1])).toEqual({
      type: `CHANGE_CITY`,
      payload: citiesMock[1],
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Should change currentCity by a given city`, () => {
    const action = {
      type: `CHANGE_CITY`,
      payload: citiesMock[0],
    };
    const {filteredOffersMock} = mock;

    const state = {
      cities: [],
      currentCity: ``,
      filteredOffers: [],
      offers: filteredOffersMock,
    };

    expect(reducer(state, action)).toEqual({
      cities: [],
      currentCity: citiesMock[0],
      filteredOffers: filteredOffersMock,
      offers: filteredOffersMock,
    });
  });

  it(`Should make a correct API call to /hotels`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const offersLoader = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return offersLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith({
          type: `LOAD_OFFERS`,
          payload: [{fake: true}],
        });
      });
  });
});
