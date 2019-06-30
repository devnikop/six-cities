import {configureAPI} from '../../api';
import MockAdapter from 'axios-mock-adapter';

import {
  adaptedOfferMock,
  adaptedOffersArrayMock,
} from '../../mocks/adaptedMocks';
import {
  offersArrayMock,
  offerMock,
} from '../../mocks/mocksForTests';
import {
  rawOfferMock,
  rawOffersArrayMock,
} from '../../mocks/rawMocks';

import {changeOffer} from '../reducer-utilities';

import {ActionType as DataActionType} from '../data/data';
import {
  ActionCreator,
  ActionType,
  Operation,
  reducer,
} from './favorite';

const initialStateMock = {
  favoriteOffers: offersArrayMock,
};

const ActionsMock = {
  setFavoriteOffersAction: {
    type: ActionType.SET_FAVORITE_OFFERS,
    payload: offersArrayMock,
  },

  undefinedAction: {
    type: `UNDEFINED`,
    payload: ``,
  },

  updateFavoriteOffersByGivenOfferAction: {
    type: ActionType.UPDATE_FAVORITE_OFFERS_BY_GIVEN_OFFER,
    payload: offerMock,
  },
};

describe(`Action Creators work correctly`, () => {
  it(`FavoriteOffers set correctly`, () => {
    const action = ActionsMock.setFavoriteOffersAction;

    expect(ActionCreator.setFavoriteOffers(action.payload))
      .toEqual(action);
  });

  it(`FavoriteOffers update correctly by given offer`, () => {
    const action = ActionsMock.updateFavoriteOffersByGivenOfferAction;

    expect(ActionCreator.updateFavoriteOffersByGivenOffer(action.payload))
      .toEqual(action);
  });
});

describe(`Operation works correctly`, () => {
  it(`Should make a correct API call to /favorite`, () => {
    const favoriteOffersLoader = Operation.loadFavoriteOffers();
    const serverAnswer = rawOffersArrayMock;

    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);

    apiMock
      .onGet(`/favorite`)
      .reply(200, serverAnswer);

    return favoriteOffersLoader(dispatch, jest.fn(), api)
      .then(() => {
        const adaptedOffers = adaptedOffersArrayMock;

        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_FAVORITE_OFFERS,
          payload: adaptedOffers,
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const offer = adaptedOfferMock;
    const favoriteOffersLoader = Operation.postFavoriteOffer(offer);
    const serverAnswer = rawOfferMock;

    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);

    apiMock
      .onPost(`/favorite/${offer.id}/${+!offer.isFavorite}`)
      .reply(200, serverAnswer);

    return favoriteOffersLoader(dispatch, jest.fn(), api)
      .then(() => {
        const adaptedOffer = adaptedOfferMock;

        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_FAVORITE_OFFERS_BY_GIVEN_OFFER,
          payload: adaptedOffer,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: DataActionType.UPDATE_OFFERS_BY_GIVEN_OFFER,
          payload: adaptedOffer,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: DataActionType.UPDATE_SORTED_OFFERS_BY_GIVEN_OFFER,
          payload: adaptedOffer,
        });
      });
  });
});

describe(`Reducer works correctly`, () => {
  const state = initialStateMock;

  it(`Should set favoriteOffers by a given offers`, () => {
    const action = ActionsMock.setFavoriteOffersAction;

    expect(reducer(state, action))
      .toEqual(Object.assign({}, state, {
        favoriteOffers: action.payload,
      }));
  });

  it(`Should update favoriteOffers by a given offer`, () => {
    const action = ActionsMock.updateFavoriteOffersByGivenOfferAction;

    expect(reducer(state, action))
      .toEqual(Object.assign({}, state, {
        favoriteOffers: changeOffer(state.favoriteOffers, action.payload),
      }));
  });

  it(`Should return state if action type undefined`, () => {
    const action = ActionsMock.undefinedAction;

    expect(reducer(state, action))
      .toEqual(state);
  });
});
