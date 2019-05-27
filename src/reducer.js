import {
  offers,
  cities,
} from "./mocks/offers";

const getFilteredOffers = (city) =>
  offers.filter((offer) =>
    offer.city === city);

const initialState = {
  currentCity: cities[0].name,
  filteredOffers: getFilteredOffers(cities[0].name),
};

const ActionCreators = {
  changeCity: (city) => ({
    type: `CHANGE_CITY`,
    payload: city,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`:
      return Object.assign({}, state, {
        currentCity: action.payload,
        filteredOffers: getFilteredOffers(action.payload),
      });
  }
  return state;
};

export {
  ActionCreators,
  reducer,
  getFilteredOffers
};
