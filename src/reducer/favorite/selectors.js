import {createSelector} from 'reselect';

import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.FAVORITE;

const getFavoriteOffers = (state) => {
  return state[NAME_SPACE].favoriteOffers;
};

const getFavoriteOffersCities = createSelector(
    getFavoriteOffers,
    (favoriteOffers) => [...new Set(favoriteOffers.map((offer) => offer.city.name))]
);

const getFavoriteOffersOfCity = (city, state) => {
  return getFavoriteOffers(state).filter((offer) => offer.city.name === city);
};

export {
  getFavoriteOffers,
  getFavoriteOffersCities,
  getFavoriteOffersOfCity,
};
