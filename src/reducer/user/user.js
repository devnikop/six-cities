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
  reducer,
};
