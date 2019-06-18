import axios from 'axios';

const configureAPI = (onLoginFail) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    // onLoginFail();
    return response;
  };
  const onFail = (error) => {
    if (error.response.request.responseURL.indexOf(`/login`) === -1 && error.response.status === 403) {
      onLoginFail();
    }
    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {configureAPI};
