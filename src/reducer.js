import {
  offers,
  cities,
} from "./mocks/offers";

const getFilteredOffers = (city) =>
  offers.filter((offer) =>
    offer.city === city);

const initialState = {
  cities: [...new Set(offers.map((it) => it.city))],
  currentCity: cities[0].name,
  filteredOffers: getFilteredOffers(cities[0].name),
};

const ActionCreator = {
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
  ActionCreator,
  getFilteredOffers,
  reducer,
};
