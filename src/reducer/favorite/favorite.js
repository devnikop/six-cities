import {adaptOffers, adaptOffer} from '../../adapter';
import {changeOffer} from '../reducer-utilities';

import {ActionCreator as ActionCreatorData} from '../data/data';

const initialState = {
  favoriteOffers: [],
};

const ActionCreator = {
  setFavoriteOffers: (offers) => ({
    type: `LOAD_FAVORITE_OFFERS`,
    payload: offers,
  }),
  updateFavoriteOffer: (offer) => ({
    type: `UPDATE_FAVORITE_OFFER`,
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
        dispatch(ActionCreator.updateFavoriteOffer(data));
        dispatch(ActionCreatorData.updateOffersByGivenOffer(data));
        dispatch(ActionCreatorData.updateSortedOfferByGivenOffer(data));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `LOAD_FAVORITE_OFFERS`:
      return Object.assign({}, state, {
        favoriteOffers: action.payload,
      });

    case `UPDATE_FAVORITE_OFFER`:
      return Object.assign({}, state, {
        favoriteOffers: changeOffer(state.favoriteOffers, action.payload),
      });
  }
  return state;
};

export {
  ActionCreator,
  Operation,
  reducer,
};
