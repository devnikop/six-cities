import {createSelector} from 'reselect';
import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.DATA;

const getActiveOfferId = (state) => {
  return state[NAME_SPACE].activeOfferId;
};

const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

const getCities = (state) => {
  return state[NAME_SPACE].cities;
};

const getCurrentCity = (state) => {
  return state[NAME_SPACE].currentCity;
};

const getOfferOfCity = (state) => {
  return state[NAME_SPACE].offerOfCity;
};

const getNearestOffers = createSelector(
    getOfferOfCity,
    (offers) => offers.slice(0, 3)
);

const getOfferById = (id, state) => {
  return getOffers(state).filter((offer) => offer.id === id)[0];
};

const getReviews = (state) => {
  return state[NAME_SPACE].reviews;
};

const getSortedOffers = (state) => {
  return state[NAME_SPACE].sortedOffers;
};


export {
  getActiveOfferId,
  getCities,
  getCurrentCity,
  getNearestOffers,
  getOfferById,
  getOfferOfCity,
  getOffers,
  getReviews,
  getSortedOffers,
};
