import {createSelector} from 'reselect';

import NameSpace from '../name-spaces';
import {extractUniqueCities} from '../../utilities';

const NAME_SPACE = NameSpace.DATA;

const getActiveOfferId = (state) => {
  return state[NAME_SPACE].activeOfferId;
};

const getCurrentCity = (state) => {
  return state[NAME_SPACE].currentCity;
};

const getOfferById = (id, state) => {
  return getOffers(state).filter((offer) => offer.id === id)[0];
};

const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

const getSortedOffers = (state) => {
  return state[NAME_SPACE].sortedOffers;
};

const getNearestOffers = (id, state) => {
  const offers = getOffersOfCity(state).filter((offer) => offer.id !== id).slice(0, 2);
  offers.push(getOfferById(id, state));
  return offers;
};

const getCities = createSelector(
    getOffers,
    (offers) => extractUniqueCities(offers)
);

const getOffersOfCity = createSelector(
    getOffers,
    getCurrentCity,
    (offers, city) => offers.filter((offer) => offer.city.name === city)
);

export {
  getActiveOfferId,
  getCities,
  getCurrentCity,
  getNearestOffers,
  getOfferById,
  getOffers,
  getOffersOfCity,
  getSortedOffers,
};
