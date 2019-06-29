import {configureAPI} from '../../api';
import MockAdapter from 'axios-mock-adapter';

// import {adaptOffers} from '../../adapter';

import {
  citiesMock,
  offersArrayMock,
  offerMock,
} from '../../mocks/mocksForTests';
import {
  ActionCreator,
  Operation,
  reducer,
} from './data';

describe(`Action Creators work correctly`, () => {
  it(`ActiveOffer changed correctly`, () => {
    const mock = {
      id: 1,
    };
    const {id} = mock;

    expect(ActionCreator.changeActiveOfferId(id)).toEqual({
      type: `CHANGE_ACTIVE_OFFER_ID`,
      payload: id,
    });
  });

  it(`City changed correctly`, () => {
    expect(ActionCreator.changeCity(citiesMock[1])).toEqual({
      type: `CHANGE_CITY`,
      payload: citiesMock[1],
    });
  });

  it(`Offer changed correctly`, () => {
    expect(ActionCreator.changeOffer(offerMock)).toEqual({
      type: `CHANGE_OFFER`,
      payload: offerMock,
    });
  });

  it(`Offers set correctly`, () => {
    expect(ActionCreator.setOffers(offersArrayMock)).toEqual({
      type: `LOAD_OFFERS`,
      payload: offersArrayMock,
    });
  });

  it(`SortedOffers set correctly`, () => {
    expect(ActionCreator.setSortedOffers(offersArrayMock)).toEqual({
      type: `SET_SORTED_OFFERS`,
      payload: offersArrayMock,
    });
  });
});

describe(`Reducer works correctly`, () => {
  it.skip(`Should change currentCity by a given city`, () => {
    const action = {
      type: `CHANGE_CITY`,
      payload: citiesMock[0],
    };
    const state = {
      cities: [],
      currentCity: ``,
      offers: offersArrayMock,
    };

    expect(reducer(state, action)).toEqual({
      cities: [],
      currentCity: citiesMock[0],
      offers: offersArrayMock,
    });
  });

  it.skip(`Should make a correct API call to /hotels`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const offersLoader = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return offersLoader(dispatch, jest.fn(), api)
      .then(() => {
        // expect(adaptOffers).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith({
          type: `LOAD_OFFERS`,
          payload: [{fake: true}],
        });
      });
  });
});
