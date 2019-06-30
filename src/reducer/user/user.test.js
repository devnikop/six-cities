import {configureAPI} from '../../api';
import MockAdapter from 'axios-mock-adapter';

import {adaptedLoginDataMock} from '../../mocks/adaptedMocks';
import {loginDataMock} from '../../mocks/mocksForTests';
import {rawLoginDataMock} from '../../mocks/rawMocks';

import {
  ActionCreator,
  ActionType,
  Operation,
  reducer,
} from './user';

const ActionsMock = {
  requiredAuthorizationAction: {
    type: ActionType.SET_AUTHORIZATION_REQUIRED,
    payload: false,
  },

  setUserDataAction: {
    type: ActionType.SET_USER_DATA,
    payload: loginDataMock,
  },
};

const initialState = {
  isAuthorizationRequired: false,
  loginData: loginDataMock,
};

describe(`Action Creators work correctly`, () => {
  it(`isAuthorizationRequired change correctly`, () => {
    const action = ActionsMock.requiredAuthorizationAction;

    expect(ActionCreator.requiredAuthorization(action.payload))
      .toEqual(action);
  });

  it(`User data set correctly`, () => {
    const action = ActionsMock.setUserDataAction;

    expect(ActionCreator.setUserData(action.payload))
      .toEqual(action);
  });
});

describe(`Operation works correclty`, () => {
  it(`Should make a correct API call to /login`, () => {
    const loginDataLoader = Operation.loadLoginData();
    const serverAnswer = rawLoginDataMock;

    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);

    apiMock
      .onGet(`/login`)
      .reply(200, serverAnswer);

    return loginDataLoader(dispatch, jest.fn(), api)
      .then(() => {
        const adaptedData = adaptedLoginDataMock;

        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER_DATA,
          payload: adaptedData,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_AUTHORIZATION_REQUIRED,
          payload: false,
        });
      });
  });

  it(`Should make a correct API call to /login`, () => {
    const formData = {
      email: ``,
      password: ``,
    };

    const loginDataLoader = Operation.postLogin(formData);
    const serverAnswer = rawLoginDataMock;

    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);

    apiMock
      .onPost(`/login`, formData)
      .reply(200, serverAnswer);

    return loginDataLoader(dispatch, jest.fn(), api)
      .then(() => {
        const adaptedData = adaptedLoginDataMock;

        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER_DATA,
          payload: adaptedData,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_AUTHORIZATION_REQUIRED,
          payload: false,
        });
      });
  });
});

describe(`Reducer works correctly`, () => {
  const state = initialState;

  it(`Should change isAuthorizationRequired by given data`, () => {
    const action = ActionsMock.requiredAuthorizationAction;

    expect(reducer(state, action))
      .toEqual(Object.assign({}, state, {
        isAuthorizationRequired: action.payload,
      }));
  });

  it(`Should set user data by given data`, () => {
    const action = ActionsMock.setUserDataAction;

    expect(reducer(state, action))
      .toEqual(Object.assign({}, state, {
        loginData: action.payload,
      }));
  });
});
