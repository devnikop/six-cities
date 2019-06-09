import axios from 'axios';

import {ActionCreator} from './reducer';
import {adaptOffers} from './adapter';

const configureAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => adaptOffers(response.data);
  const onFail = (err) => {
    if (err.response.status === 403) {
      dispatch(ActionCreator);
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {configureAPI};
