import {configureAPI} from '../../api';
import MockAdapter from 'axios-mock-adapter';

import {
  citiesMock,
  offersArrayMock,
} from '../../mocks/mocksForTests';
import {
  ActionCreator,
  Operation,
  reducer,
} from './data';

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
