import {adaptOffers} from '../../adapter';
import {changeOffer} from '../reducer-utilities';
import {
  getRandomNumber,
  extractUniqueCities,
} from '../../utilities';

const initialState = {
  activeOfferId: null,
  cities: [],
  currentCity: ``,
  offers: [],
  offersOfCity: [],
  sortedOffers: [],
};

const ActionCreator = {
  changeActiveOfferId: (id) => ({
    type: `CHANGE_ACTIVE_OFFER_ID`,
    payload: id,
  }),

  changeCity: (city) => ({
    type: `CHANGE_CITY`,
    payload: city,
  }),

  changeOffer: (offer) => ({
    type: `CHANGE_OFFER`,
    payload: offer,
  }),

  setOffers: (offers) => ({
    type: `LOAD_OFFERS`,
    payload: offers,
  }),

  setSortedOffers: (offers) => ({
    type: `SET_SORTED_OFFERS`,
    payload: offers,
  }),
};

const Operation = {
  loadOffers: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((response) =>
        adaptOffers(response.data)
      )
      .then((data) => {
        dispatch(ActionCreator.setOffers(data));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_ACTIVE_OFFER_ID`:
      return Object.assign({}, state, {
        activeOfferId: action.payload,
      });

    case `CHANGE_CITY`:
      return Object.assign({}, state, {
        currentCity: action.payload,
        offersOfCity: state.offers.filter((offer) => offer.city.name === action.payload),
        sortedOffers: state.offers.filter((offer) => offer.city.name === action.payload),
      });

    case `CHANGE_OFFER`:
      return Object.assign({}, state, {
        offers: changeOffer(state.offers, action.payload),
        offersOfCity: changeOffer(state.offersOfCity, action.payload),
        sortedOffers: changeOffer(state.sortedOffers, action.payload),
      });

    case `LOAD_OFFERS`:
      const offers = action.payload;
      const uniqueCities = extractUniqueCities(offers);
      const currentCity = offers[getRandomNumber(uniqueCities.length)].city.name;

      return Object.assign({}, state, {
        cities: uniqueCities,
        currentCity,
        offersOfCity: offers.filter((offer) => offer.city.name === currentCity),
        sortedOffers: offers.filter((offer) => offer.city.name === currentCity),
        offers,
      });

    case `SET_SORTED_OFFERS`:
      return Object.assign({}, state, {
        sortedOffers: action.payload,
      });
  }
  return state;
};

export {
  ActionCreator,
  Operation,
  reducer,
};
