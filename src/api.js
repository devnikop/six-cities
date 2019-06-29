import axios from 'axios';
import history from './history';

const configureAPI = () => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };
  const onFail = (error) => {
    const responseText = error.response.request.responseURL.indexOf(`/login`);
    const responseStatus = error.response.status;

    if (responseText === -1 && responseStatus === 403) {
      history.push(`/login`);
    }
    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {configureAPI};
