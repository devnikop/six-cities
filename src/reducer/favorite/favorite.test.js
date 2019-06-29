import {
  offersArrayMock,
  offerMock,
} from '../../mocks/mocksForTests';
import {
  ActionCreator,
  // Operation,
  // reducer,
} from './favorite';

describe(`Action Creators work correctly`, () => {
  it(`FavoriteOffers set correctly`, () => {
    expect(ActionCreator.setFavoriteOffers(offersArrayMock)).toEqual({
      type: `LOAD_FAVORITE_OFFERS`,
      payload: offersArrayMock,
    });
  });

  it(`FavoriteOffer update correctly`, () => {
    expect(ActionCreator.updateFavoriteOffer(offerMock)).toEqual({
      type: `UPDATE_FAVORITE_OFFER`,
      payload: offerMock,
    });
  });
});
