import {adaptComments} from '../../adapter';

const ActionType = {
  SET_REVIEWS: `SET_REVIEWS`,
};

const initialState = {
  reviews: [],
};

const ActionCreator = {
  setReviews: (reviews) => ({
    type: ActionType.SET_REVIEWS,
    payload: reviews,
  }),
};

const Operation = {
  loadReviews: (id) => (dispatch, _getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) =>
        adaptComments(response.data)
      )
      .then((data) =>
        dispatch(ActionCreator.setReviews(data))
      );
  },

  postReview: (offerId, formData) => (dispatch, _getState, api) => {
    return api.post(`/comments/${offerId}`, formData)
      .then((response) =>
        adaptComments(response.data)
      )
      .then((data) =>
        dispatch(ActionCreator.setReviews(data))
      );
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_REVIEWS:
      return Object.assign({}, state, {
        reviews: action.payload,
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
