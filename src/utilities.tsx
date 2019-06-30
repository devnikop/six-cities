const RATING_TRANSFORM_CONSTANT = 20;

const extractUniqueCities = (offers) => {
  return [...new Set(offers.map((it) => it.city.name))];
};

const getRandomNumber = (length) => {
  return Math.floor(Math.random() * length);
};

const getRating = (offer) => `${offer.rating * RATING_TRANSFORM_CONSTANT}%`;

const isAuthorized = (userData) => Boolean(userData.email);

export {
  extractUniqueCities,
  getRandomNumber,
  getRating,
  isAuthorized,
};
