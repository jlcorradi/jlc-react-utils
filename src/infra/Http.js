import axios from 'axios';
import {toast} from 'react-toastify'

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  response => {
    notify(response.headers);
    return response;
  },
  error => {
    let message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    toast.error(message);
    return Promise.reject(error);
  },
);

const notify = headers => {
  if (headers['x-success-message']) {
    toast.success(headers['x-success-message']);
  }

  if (headers['x-info-message']) {
    toast.info(headers['x-info-message']);
  }

  if (headers['x-warning-message']) {
    toast.warning(headers['x-warning-message']);
  }
};

export const updateAuthHeader = (authTokenName, token) => {
  let newToken = token || localStorage.getItem(authTokenName);
  if (newToken) {
    localStorage.setItem(authTokenName, newToken);
    axios.defaults.headers = {
      Authorization: `Bearer ${localStorage.getItem(authTokenName)}`,
    }
  }
};

export const clearAuthHeader = (authTokenName) => {
  localStorage.setItem(authTokenName, "");
}

const request = axios;

export default request;
