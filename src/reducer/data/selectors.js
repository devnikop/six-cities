import {createSelector} from 'reselect';
import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.DATA;

const getActiveOfferId = (state) => {
  return state[NAME_SPACE].activeOfferId;
};

const getCities = (state) => {
  return state[NAME_SPACE].cities;
};

const getCurrentCity = (state) => {
  return state[NAME_SPACE].currentCity;
};

const getOfferById = (id, state) => {
  return getOffers(state).filter((offer) => offer.id === id)[0];
};

const getOffersOfCity = (state) => {
  return state[NAME_SPACE].offersOfCity;
};

const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

const getReviews = (state) => {
  return state[NAME_SPACE].reviews;
};

const getSortedOffers = (state) => {
  return state[NAME_SPACE].sortedOffers;
};

const getNearestOffers = createSelector(
    getOffersOfCity,
    (offers) => offers.slice(0, 3)
);


export {
  getActiveOfferId,
  getCities,
  getCurrentCity,
  getNearestOffers,
  getOfferById,
  getOffersOfCity,
  getOffers,
  getReviews,
  getSortedOffers,
};
