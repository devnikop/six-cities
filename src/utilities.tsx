const getRandomNumber = (length) => {
  return Math.floor(Math.random() * length);
};

const getRating = (offer) => `${offer.rating * 20}%`;

const extractUniqueCities = (offers) => {
  return [...new Set(offers.map((it) => it.city.name))];
};

const isAuthorized = (userData) => Boolean(userData.email);

export {
  getRandomNumber,
  getRating,
  extractUniqueCities,
  isAuthorized,
};
