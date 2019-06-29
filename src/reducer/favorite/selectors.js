import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.FAVORITE;

const getFavoriteOffers = (state) => {
  return state[NAME_SPACE].favoriteOffers;
};

export {
  getFavoriteOffers
};
