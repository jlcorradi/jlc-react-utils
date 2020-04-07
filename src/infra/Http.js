import axios from 'axios';
import dispatcher, { BUSY_STATE_CHANGED } from './GlobalDispatcher.js';
import { NotificationManager } from 'react-notifications';

export const AUTH_TOKEN_NAME = 'app@auth_token';

axios.interceptors.request.use(
  config => {
    dispatcher.emit(BUSY_STATE_CHANGED, true);
    return config;
  },
  error => {
    dispatcher.emit(BUSY_STATE_CHANGED, true);
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  response => {
    dispatcher.emit(BUSY_STATE_CHANGED, false);
    notify(response.headers);
    return response;
  },
  error => {
    dispatcher.emit(BUSY_STATE_CHANGED, false);
    let message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    NotificationManager.error(message);
    return Promise.reject(error);
  },
);

const notify = headers => {
  if (headers['x-success-message']) {
    NotificationManager.success(headers['x-success-message']);
  }

  if (headers['x-info-message']) {
    NotificationManager.info(headers['x-info-message']);
  }

  if (headers['x-warning-message']) {
    NotificationManager.warning(headers['x-warning-message']);
  }
};

export const updateAuthHeader = (token) => {
  let newToken = token || localStorage.getItem(AUTH_TOKEN_NAME);
  if (newToken) {
    localStorage.setItem(AUTH_TOKEN_NAME, newToken);
    axios.defaults.headers = {
      Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN_NAME)}`,
    }
  }
};

export const clearAuthHeader = () => {
  localStorage.setItem(AUTH_TOKEN_NAME, "");
}

if (localStorage.getItem(AUTH_TOKEN_NAME)) {
  axios.defaults.headers = {
    Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN_NAME)}`,
  }
}

const request = axios;

export default request;
