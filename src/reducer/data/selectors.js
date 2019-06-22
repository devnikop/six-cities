import {createSelector} from 'reselect';
import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.DATA;

const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

const getCities = (state) => {
  return state[NAME_SPACE].cities;
};

const getCurrentCity = (state) => {
  return state[NAME_SPACE].currentCity;
};

const getFilteredOffers = createSelector(
    getOffers,
    getCurrentCity,
    (offers, city) => offers.filter((offer) => offer.city.name === city)
);

const getOfferById = (id, state) => {
  return getOffers(state).filter((offer) => offer.id === id)[0];
};

export {
  getCities,
  getCurrentCity,
  getFilteredOffers,
  getOfferById,
  getOffers,
};
