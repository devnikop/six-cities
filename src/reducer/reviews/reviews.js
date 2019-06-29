import {adaptComments} from '../../adapter';

const initialState = {
  reviews: [],
};

const ActionCreator = {
  loadReviews: (reviews) => ({
    type: `LOAD_REVIEWS`,
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
        dispatch(ActionCreator.loadReviews(data))
      );
  },

  postReview: (offerId, formData) => (dispatch, _getState, api) => {
    return api.post(`/comments/${offerId}`, formData)
      .then((response) =>
        adaptComments(response.data)
      )
      .then((data) =>
        dispatch(ActionCreator.loadReviews(data))
      );
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `LOAD_REVIEWS`:
      return Object.assign({}, state, {
        reviews: action.payload,
      });
  }
  return state;
};

export {
  ActionCreator,
  Operation,
  reducer,
};
