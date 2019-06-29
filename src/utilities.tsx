const getRating = (offer) => `${offer.rating * 20}%`;

const isAuthorized = (userData) => Boolean(userData.email);



export {
  getRating,
  isAuthorized,
};
