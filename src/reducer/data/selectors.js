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

const getFavoriteOffers = (state) => {
  return state[NAME_SPACE].favoriteOffers;
};

const getFavoriteOffersCities = (state) => {
  return state[NAME_SPACE].favoriteOffersCities;
};

const getFavoriteOffersOfCity = (city, state) => {
  return getFavoriteOffers(state).filter((offer) => offer.city.name === city);
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
  getFavoriteOffers,
  getFavoriteOffersCities,
  getFavoriteOffersOfCity,
  getNearestOffers,
  getOfferById,
  getOffers,
  getOffersOfCity,
  getReviews,
  getSortedOffers,
};
