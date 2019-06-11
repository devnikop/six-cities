const getFilteredOffers = (offers, city) =>
  offers.filter((offer) =>
    offer.city.name === city);

const initialState = {
  cities: [],
  currentCity: ``,
  filteredOffers: [],
  offers: [],
};

const ActionCreator = {
  changeCity: (city) => ({
    type: `CHANGE_CITY`,
    payload: city,
  }),

  loadOffers: (offers) => ({
    type: `LOAD_OFFERS`,
    payload: offers,
  }),
};

const Operation = {
  loadOffers: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((data) =>
        dispatch(ActionCreator.loadOffers(data))
      );
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`:
      return Object.assign({}, state, {
        currentCity: action.payload,
        filteredOffers: getFilteredOffers(state.offers, action.payload),
      });

    case `LOAD_OFFERS`:
      const data = action.payload;
      return Object.assign({}, state, {
        cities: [...new Set(data.map((it) => it.city.name))],
        currentCity: data[0].city.name,
        filteredOffers: getFilteredOffers(data, data[0].city.name),
        offers: data,
      });
  }
  return state;
};

export {
  ActionCreator,
  getFilteredOffers,
  Operation,
  reducer,
};
