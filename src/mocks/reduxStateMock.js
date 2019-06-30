import {
  citiesMock,
  offersArrayMock,
  reviewsArrayMock,
  loginDataMock,
} from './mocksForTests';

import NameSpace from '../reducer/name-spaces';

const StoreMock = {
  data: {
    activeOfferId: 0,
    currentCity: citiesMock[0],
    offers: offersArrayMock,
    sortedOffers: offersArrayMock,
  },
  favorite: {
    favoriteOffers: offersArrayMock,
  },
  review: {
    reviews: reviewsArrayMock,
  },
  user: {
    isAuthorizationRequired: false,
    loginData: loginDataMock,
  },
};

const reduxStateMock = {
  [NameSpace.DATA]: StoreMock.data,
  [NameSpace.FAVORITE]: StoreMock.favorite,
  [NameSpace.REVIEW]: StoreMock.review,
  [NameSpace.USER]: StoreMock.user,
};

export default reduxStateMock;
