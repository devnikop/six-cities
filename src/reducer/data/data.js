import {adaptOffers, adaptComments} from '../../adapter';

const initialState = {
  activeOfferId: undefined,
  cities: [],
  currentCity: ``,
  offerOfCity: [],
  offers: [],
  reviews: [],
  sortedOffers: [],
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

  setSortedOffers: (offers) => ({
    type: `SET_SORTED_OFFERS`,
    payload: offers,
  }),

  setOffers: (offers) => ({
    type: `LOAD_OFFERS`,
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
        offerOfCity: state.offers.filter((offer) => offer.city.name === action.payload),
        sortedOffers: state.offers.filter((offer) => offer.city.name === action.payload),
      });

    case `CHANGE_OFFER`:
      return Object.assign({}, state, {
        offers: _changeOffer(state.offers, action.payload),
        offerOfCity: _changeOffer(state.offerOfCity, action.payload),
        sortedOffers: _changeOffer(state.sortedOffers, action.payload),
      });

    case `LOAD_REVIEWS`:
      return Object.assign({}, state, {
        reviews: action.payload,
      });

    case `SET_SORTED_OFFERS`:
      return Object.assign({}, state, {
        sortedOffers: action.payload,
      });

    case `LOAD_OFFERS`:
      const data = action.payload;
      return Object.assign({}, state, {
        cities: [...new Set(data.map((it) => it.city.name))],
        currentCity: data[0].city.name,
        offerOfCity: data.filter((offer) => offer.city.name === data[0].city.name),
        sortedOffers: data.filter((offer) => offer.city.name === data[0].city.name),
        offers: data,
      });
  }
  return state;
};

export {
  ActionCreator,
  Operation,
  reducer,
};
