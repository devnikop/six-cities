import {
  adaptOffers,
  adaptComments
} from '../../adapter';

const initialState = {
  activeOfferId: undefined,
  cities: [],
  currentCity: ``,
  favoriteOffers: [],
  favoriteOffersCities: [],
  offers: [],
  offersOfCity: [],
  reviews: [],
  sortedOffers: [],
};

const getUniqueCities = (offers) => {
  return [...new Set(offers.map((it) => it.city.name))];
};

const getRandomNumber = (length) => {
  return Math.floor(Math.random() * length);
};

const _changeOffer = (offers, newOffer) => {
  return offers.map((item) => {
    return item.id === newOffer.id ? newOffer : item;
  });
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

  loadReviews: (reviews) => ({
    type: `LOAD_REVIEWS`,
    payload: reviews,
  }),

  setFavoriteOffers: (offers) => ({
    type: `LOAD_FAVORITE_OFFERS`,
    payload: offers,
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
  loadFavoriteOffers: () => (dispatch, _getState, api) => {
    return api.get(`/favorite`)
      .then((response) =>
        adaptOffers(response.data)
      )
      .then((data) =>
        dispatch(ActionCreator.setFavoriteOffers(data))
      );
  },
  loadOffers: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((response) =>
        adaptOffers(response.data)
      )
      .then((data) => {
        dispatch(ActionCreator.setOffers(data));
      });
  },
  loadReviews: (id) => (dispatch, _getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) =>
        adaptComments(response.data)
      )
      .then((data) =>
        dispatch(ActionCreator.loadReviews(data))
      );
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
        favoriteOffers: _changeOffer(state.favoriteOffers, action.payload),
        offers: _changeOffer(state.offers, action.payload),
        offersOfCity: _changeOffer(state.offersOfCity, action.payload),
        sortedOffers: _changeOffer(state.sortedOffers, action.payload),
      });

    case `LOAD_FAVORITE_OFFERS`:
      return Object.assign({}, state, {
        favoriteOffersCities: [...new Set(action.payload.map((it) => it.city.name))],
        favoriteOffers: action.payload,
      });

    case `LOAD_OFFERS`:
      const offers = action.payload;
      const uniqueCities = getUniqueCities(offers);
      const currentCity = offers[getRandomNumber(uniqueCities.length)].city.name;

      return Object.assign({}, state, {
        cities: uniqueCities,
        currentCity,
        offersOfCity: offers.filter((offer) => offer.city.name === currentCity),
        sortedOffers: offers.filter((offer) => offer.city.name === currentCity),
        offers,
      });

    case `LOAD_REVIEWS`:
      return Object.assign({}, state, {
        reviews: action.payload,
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
