import axios from 'axios';

import {ActionCreator} from './reducer/user/user';
import {adaptOffers} from './adapter';

const configureAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    dispatch(ActionCreator.requiredAuthorization(true));
    // SHOULD TAKE OUT adaptOffers, it's not right place
    if (Array.isArray(response.data)) {
      return adaptOffers(response.data);
    }
    return response;
  };
  const onFail = (err) => {
    if (err.response.status === 403) {
      dispatch(ActionCreator.requiredAuthorization(true));
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {configureAPI};
