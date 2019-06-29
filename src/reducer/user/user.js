import {adaptLoginResponse} from '../../adapter';
import history from '../../history';

const initialState = {
  isAuthorizationRequired: false,
  user: {},
};

const ActionCreator = {
  login: (user) => ({
    type: `LOGIN`,
    payload: user,
  }),

  requiredAuthorization: (status) => ({
    type: `REQUIRED_AUTHORIZATION`,
    payload: status,
  }),
};

const Operation = {
  checkAuth: () => (dispatch, _getState, api) =>
    api.get(`/login`)
      .then((response) => {
        if (response.status === 200) {
          const adaptedData = adaptLoginResponse(response.data);
          dispatch(ActionCreator.login(adaptedData));
          dispatch(ActionCreator.requiredAuthorization(false));
        }
      }),

  postLogin: (formData) => (dispatch, _getState, api) => {
    return api.post(`/login`, formData)
      .then((response) => {
        return adaptLoginResponse(response.data);
      })
      .then((data) => {
        if (data) {
          dispatch(ActionCreator.login(data));
          dispatch(ActionCreator.requiredAuthorization(false));
          history.push(`/`);
        }
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `LOGIN`:
      return Object.assign({}, state, {
        user: action.payload,
      });

    case `REQUIRED_AUTHORIZATION`:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload,
      });
  }
  return state;
};

export {
  ActionCreator,
  Operation,
  reducer,
};
