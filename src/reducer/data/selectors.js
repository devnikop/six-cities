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

export {
  getCities,
  getCurrentCity,
  getFilteredOffers,
  getOffers,
};
