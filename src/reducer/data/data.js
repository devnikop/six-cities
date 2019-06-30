import {adaptOffers} from '../../adapter';
import {changeOffer} from '../reducer-utilities';
import {
  getRandomNumber,
  extractUniqueCities,
} from '../../utilities';

const ActionType = {
  CHANGE_ACTIVE_OFFER_ID: `CHANGE_ACTIVE_OFFER_ID`,
  CHANGE_CITY: `CHANGE_CITY`,
  SET_OFFERS: `SET_OFFERS`,
  SET_SORTED_OFFERS_BY_CITY: `SET_SORTED_OFFERS_BY_CITY`,
  SET_SORTED_OFFERS: `SET_SORTED_OFFERS`,
  UPDATE_OFFERS_BY_GIVEN_OFFER: `UPDATE_OFFERS_BY_GIVEN_OFFER`,
  UPDATE_SORTED_OFFERS_BY_GIVEN_OFFER: `UPDATE_SORTED_OFFERS_BY_GIVEN_OFFER`,
};

const initialState = {
  activeOfferId: null,
  currentCity: ``,
  offers: [],
  sortedOffers: [],
};

const ActionCreator = {
  changeActiveOfferId: (id) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER_ID,
    payload: id,
  }),

  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  setOffers: (offers) => ({
    type: ActionType.SET_OFFERS,
    payload: offers,
  }),

  setSortedOffersByCity: (city) => ({
    type: ActionType.SET_SORTED_OFFERS_BY_CITY,
    payload: city,
  }),

  setSortedOffers: (offers) => ({
    type: ActionType.SET_SORTED_OFFERS,
    payload: offers,
  }),

  updateOffersByGivenOffer: (offer) => ({
    type: ActionType.UPDATE_OFFERS_BY_GIVEN_OFFER,
    payload: offer,
  }),

  updateSortedOfferByGivenOffer: (offer) => ({
    type: ActionType.UPDATE_SORTED_OFFERS_BY_GIVEN_OFFER,
    payload: offer,
  }),
};

const Operation = {
  loadOffers: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((response) =>
        adaptOffers(response.data)
      )
      .then((offers) => {
        const uniqueCities = extractUniqueCities(offers);
        const currentCity = offers[getRandomNumber(uniqueCities.length)].city.name;

        dispatch(ActionCreator.setOffers(offers));
        dispatch(ActionCreator.changeCity(currentCity));
        dispatch(ActionCreator.setSortedOffersByCity(currentCity));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_OFFER_ID:
      return Object.assign({}, state, {
        activeOfferId: action.payload,
      });

    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        currentCity: action.payload,
      });

    case ActionType.SET_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload,
      });


    case ActionType.SET_SORTED_OFFERS_BY_CITY:
      return Object.assign({}, state, {
        sortedOffers: state.offers.filter((offer) => offer.city.name === action.payload),
      });

    case ActionType.SET_SORTED_OFFERS:
      return Object.assign({}, state, {
        sortedOffers: action.payload,
      });

    case ActionType.UPDATE_OFFERS_BY_GIVEN_OFFER:
      return Object.assign({}, state, {
        offers: changeOffer(state.offers, action.payload),
      });

    case ActionType.UPDATE_SORTED_OFFERS_BY_GIVEN_OFFER:
      return Object.assign({}, state, {
        sortedOffers: changeOffer(state.sortedOffers, action.payload),
      });
  }
  return state;
};

export {
  ActionCreator,
  ActionType,
  Operation,
  reducer,
};
