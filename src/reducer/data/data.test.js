import {configureAPI} from '../../api';
import MockAdapter from 'axios-mock-adapter';

import {
  adaptedOffersArrayMock,
  citiesMock,
  offersArrayMock,
  rawOffersArrayMock,
  offerMock,
} from '../../mocks/mocksForTests';
import {
  getRandomNumber,
  extractUniqueCities,
} from '../../utilities';
import {changeOffer} from '../reducer-utilities';

import {
  ActionCreator,
  ActionType,
  Operation,
  reducer,
} from './data';

const ActionsMock = {
  changeActiveOfferIdAction: {
    type: ActionType.CHANGE_ACTIVE_OFFER_ID,
    payload: 2,
  },

  changeCityAction: {
    type: ActionType.CHANGE_CITY,
    payload: citiesMock[0],
  },

  setOffersAction: {
    type: ActionType.SET_OFFERS,
    payload: offersArrayMock,
  },

  setSortedOffersByCityAction: {
    type: ActionType.SET_SORTED_OFFERS_BY_CITY,
    payload: citiesMock[0],
  },

  setSortedOffersAction: {
    type: ActionType.SET_SORTED_OFFERS,
    payload: offersArrayMock,
  },

  undefinedAction: {
    type: `UNDEFINED`,
    payload: ``,
  },

  updateOffersByGivenOfferAction: {
    type: ActionType.UPDATE_OFFERS_BY_GIVEN_OFFER,
    payload: offerMock,
  },

  updateSortedOfferByGivenOfferAction: {
    type: ActionType.UPDATE_SORTED_OFFERS_BY_GIVEN_OFFER,
    payload: offerMock,
  },

};

const initialStateMock = {
  activeOfferId: 1,
  currentCity: citiesMock[0],
  offers: offersArrayMock,
  sortedOffers: offersArrayMock,
};

describe(`Action Creators work correctly`, () => {
  it(`ActiveOffer changed correctly`, () => {
    const action = ActionsMock.changeActiveOfferIdAction;

    expect(ActionCreator.changeActiveOfferId(action.payload))
      .toEqual(action);
  });

  it(`City changed correctly`, () => {
    const action = ActionsMock.changeCityAction;

    expect(ActionCreator.changeCity(action.payload))
      .toEqual(action);
  });

  it(`Offers set correctly`, () => {
    const action = ActionsMock.setOffersAction;

    expect(ActionCreator.setOffers(action.payload))
      .toEqual(action);
  });

  it(`SortedOffers set by city correctly`, () => {
    const action = ActionsMock.setSortedOffersByCityAction;

    expect(ActionCreator.setSortedOffersByCity(action.payload))
      .toEqual(action);
  });

  it(`SortedOffers set correctly`, () => {
    const action = ActionsMock.setSortedOffersAction;

    expect(ActionCreator.setSortedOffers(action.payload))
      .toEqual(action);
  });

  it(`Offers update correctly by given offer`, () => {
    const action = ActionsMock.updateOffersByGivenOfferAction;

    expect(ActionCreator.updateOffersByGivenOffer(action.payload))
      .toEqual(action);
  });

  it(`SortedOffers update correctly by given offer`, () => {
    const action = ActionsMock.updateSortedOfferByGivenOfferAction;

    expect(ActionCreator.updateSortedOfferByGivenOffer(action.payload))
      .toEqual(action);
  });
});

describe(`Operation works correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const offersLoader = Operation.loadOffers();
    const serverAnswer = rawOffersArrayMock;

    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);

    apiMock
      .onGet(`/hotels`)
      .reply(200, serverAnswer);

    return offersLoader(dispatch, jest.fn(), api)
      .then(() => {
        const adaptedOffers = adaptedOffersArrayMock;
        const uniqueCities = extractUniqueCities(adaptedOffers);
        const currentCity = adaptedOffers[getRandomNumber(uniqueCities.length)].city.name;

        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_OFFERS,
          payload: adaptedOffers,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_CITY,
          payload: currentCity,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_SORTED_OFFERS_BY_CITY,
          payload: currentCity,
        });
      });
  });
});

describe(`Reducer works correctly`, () => {
  const state = initialStateMock;

  it(`Should change activeOfferId by a given id`, () => {
    const action = ActionsMock.changeActiveOfferIdAction;

    expect(reducer(state, action))
      .toEqual(Object.assign({}, state, {
        activeOfferId: action.payload,
      }));
  });

  it(`Should change currentCity by a given city`, () => {
    const action = ActionsMock.changeCityAction;

    expect(reducer(state, action))
      .toEqual(Object.assign({}, state, {
        currentCity: action.payload,
      }));
  });

  it(`Should set offers by a given offers`, () => {
    const action = ActionsMock.setOffersAction;

    expect(reducer(state, action))
      .toEqual(Object.assign({}, state, {
        offers: action.payload,
      }));
  });

  it(`Should set sortedOffers by a given city`, () => {
    const action = ActionsMock.setSortedOffersByCityAction;

    expect(reducer(state, action))
      .toEqual(Object.assign({}, state, {
        sortedOffers: state.offers.filter((offer) => offer.city.name === action.payload),
      }));
  });

  it(`Should set sortedOffers by a given offers`, () => {
    const action = ActionsMock.setSortedOffersAction;

    expect(reducer(state, action))
      .toEqual(Object.assign({}, state, {
        sortedOffers: action.payload,
      }));
  });

  it(`Should update offers by a given offer`, () => {
    const action = ActionsMock.updateOffersByGivenOfferAction;

    expect(reducer(state, action))
      .toEqual(Object.assign({}, state, {
        offers: changeOffer(state.offers, action.payload),
      }));
  });

  it(`Should update sortedOffers by a given offer`, () => {
    const action = ActionsMock.updateSortedOfferByGivenOfferAction;

    expect(reducer(state, action))
      .toEqual(Object.assign({}, state, {
        sortedOffers: changeOffer(state.sortedOffers, action.payload),
      }));
  });

  it(`Should return state if action type undefined`, () => {
    const action = ActionsMock.undefinedAction;

    expect(reducer(state, action))
      .toEqual(state);
  });
});
