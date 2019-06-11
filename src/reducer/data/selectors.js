// import {createSelector} from 'reselect';
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

const getFilteredOffers = (state) => {
  return state[NAME_SPACE].filteredOffers;
};

export {
  getCities,
  getCurrentCity,
  getFilteredOffers,
  getOffers,
};
