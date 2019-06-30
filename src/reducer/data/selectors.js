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
  return getOffers(state).find((offer) => offer.id === id);
};

const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

const getSortedOffers = (state) => {
  return state[NAME_SPACE].sortedOffers;
};

const getNearestOffers = (id, state) => {
  const currentOffer = getOfferById(id, state);
  const offersOfCity = getOffers(state).filter((offer) =>
    offer.city.name === currentOffer.city.name && offer.id !== id);

  const nearestOffers = offersOfCity.slice(0, 2);
  nearestOffers.push(currentOffer);
  return nearestOffers;
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
