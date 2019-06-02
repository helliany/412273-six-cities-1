import axios from 'axios';

import {actionCreator} from "./reducer/user/user";
import {BASE_URL} from "./constants";

const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === 400) {
      dispatch(actionCreator.requireAuthorization(true));
      return;
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
