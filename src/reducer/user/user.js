import {adaptLoginResponse} from '../../adapter';
import history from '../../history';
import {ServerResponseStatus} from '../../constants';

const ActionType = {
  SET_AUTHORIZATION_REQUIRED: `SET_AUTHORIZATION_REQUIRED`,
  SET_USER_DATA: `SET_USER_DATA`,
};

const initialState = {
  isAuthorizationRequired: false,
  loginData: {},
};

const ActionCreator = {
  setUserData: (user) => ({
    type: ActionType.SET_USER_DATA,
    payload: user,
  }),

  requiredAuthorization: (status) => ({
    type: ActionType.SET_AUTHORIZATION_REQUIRED,
    payload: status,
  }),
};

const Operation = {
  loadLoginData: () => (dispatch, _getState, api) =>
    api.get(`/login`)
      .then((response) => {
        if (response.status === ServerResponseStatus.SUCCESS) {
          const adaptedData = adaptLoginResponse(response.data);
          dispatch(ActionCreator.setUserData(adaptedData));
          dispatch(ActionCreator.requiredAuthorization(false));
        }
      }),

  postLogin: (formData) => (dispatch, _getState, api) => {
    return api.post(`/login`, formData)
      .then((response) => {
        if (response.data) {
          const adaptedData = adaptLoginResponse(response.data);
          dispatch(ActionCreator.setUserData(adaptedData));
          dispatch(ActionCreator.requiredAuthorization(false));
          history.push(`/`);
        }
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_USER_DATA:
      return Object.assign({}, state, {
        loginData: action.payload,
      });

    case ActionType.SET_AUTHORIZATION_REQUIRED:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload,
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
