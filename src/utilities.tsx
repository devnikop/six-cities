const getRating = (offer) => `${offer.rating * 20}%`;

const isAuthorized = (userData) => Object.keys(userData).length !== 0;



export {
  getRating,
  isAuthorized,
};
