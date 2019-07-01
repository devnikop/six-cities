import {adaptOffers, adaptOffer} from '../../adapter';
import {changeOffer} from '../reducer-utilities';

import {ActionCreator as ActionCreatorData} from '../data/data';

const ActionType = {
  SET_FAVORITE_OFFERS: `SET_FAVORITE_OFFERS`,
  UPDATE_FAVORITE_OFFERS_BY_GIVEN_OFFER: `UPDATE_FAVORITE_OFFER`,
};

const initialState = {
  favoriteOffers: [],
};

const ActionCreator = {
  setFavoriteOffers: (offers) => ({
    type: ActionType.SET_FAVORITE_OFFERS,
    payload: offers,
  }),
  updateFavoriteOffersByGivenOffer: (offer) => ({
    type: ActionType.UPDATE_FAVORITE_OFFERS_BY_GIVEN_OFFER,
    payload: offer,
  }),
};

const Operation = {
  loadFavoriteOffers: () => (dispatch, _getState, api) => {
    return api.get(`/favorite`)
      .then((response) =>
        adaptOffers(response.data)
      )
      .then((data) =>
        dispatch(ActionCreator.setFavoriteOffers(data))
      );
  },

  postFavoriteOffer: (offer) => (dispatch, _getState, api) => {
    return api.post(`/favorite/${offer.id}/${+!offer.isFavorite}`)
      .then((response) =>
        adaptOffer(response.data)
      )
      .then((data) => {
        dispatch(ActionCreator.updateFavoriteOffersByGivenOffer(data));
        dispatch(ActionCreatorData.updateOffersByGivenOffer(data));
        dispatch(ActionCreatorData.updateSortedOfferByGivenOffer(data));
      })
      .catch(() => null);
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FAVORITE_OFFERS:
      return Object.assign({}, state, {
        favoriteOffers: action.payload,
      });

    case ActionType.UPDATE_FAVORITE_OFFERS_BY_GIVEN_OFFER:
      return Object.assign({}, state, {
        favoriteOffers: changeOffer(state.favoriteOffers, action.payload),
      });
  }
  return state;
};

export {
  ActionCreator,
  ActionType,
  Operation,
  reducer,
};
