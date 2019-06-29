import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.REVIEW;

const getReviews = (state) => {
  return state[NAME_SPACE].reviews;
};

export {
  getReviews,
};
