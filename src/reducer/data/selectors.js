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

const getSortedOffers = (state) => {
  return state[NAME_SPACE].sortedOffers;
};

const getNearestOffers = (id, state) => {
  const offers = getOffersOfCity(state).filter((offer) => offer.id !== id).slice(0, 2);
  offers.push(getOfferById(id, state));
  return offers;
};

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
