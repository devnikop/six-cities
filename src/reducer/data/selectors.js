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

const getFilteredOffers = createSelector(
    getOffers,
    getCurrentCity,
    (offers, city) => offers.filter((offer) => offer.city.name === city)
);

const getNearestOffers = createSelector(
    getFilteredOffers,
    (offers) => offers.slice(0, 3)
);

const getOfferById = (id, state) => {
  return getOffers(state).filter((offer) => offer.id === id)[0];
};

const getReviews = (state) => {
  return state[NAME_SPACE].reviews;
};

// const getSortedByRatingOffers = createSelector(
//     getFilteredOffers,
//     (offers) => offers.sort((a, b) => {
//       if (a.price > b.price) {
//         return -1;
//       } else if (a.price < b.price) {
//         return 1;
//       } else {
//         return 0;
//       }
//     })
// );

// const getSortedLowToHighPriceOffers = createSelector(
//     getFilteredOffers,
//     (offers) => offers.sort((a, b) => {
//       if (a.price < b.price) {
//         return -1;
//       } else if (a.price > b.price) {
//         return 1;
//       } else {
//         return 0;
//       }
//     })
// );

// const getSortedHighToLowPriceOffers = createSelector(
//     getFilteredOffers,
//     (offers) => offers.sort((a, b) => {
//       if (a.price > b.price) {
//         return -1;
//       } else if (a.price < b.price) {
//         return 1;
//       } else {
//         return 0;
//       }
//     })
// );

// const getSortedPopularFirstOffers = createSelector(
//     getFilteredOffers,
//     (offers) => offers
// );

const getSortedOffers = (state) => {
  return state[NAME_SPACE].sortedOffers;
};

export {
  getActiveOfferId,
  getCities,
  getCurrentCity,
  getFilteredOffers,
  getNearestOffers,
  getOfferById,
  getOffers,
  getReviews,
  // getSortedByRatingOffers,
  // getSortedHighToLowPriceOffers,
  // getSortedLowToHighPriceOffers,
  getSortedOffers,
  // getSortedPopularFirstOffers,
};
