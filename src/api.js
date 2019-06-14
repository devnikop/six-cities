import axios from 'axios';

import {ActionCreator} from './reducer/user/user';

const configureAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => {
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
