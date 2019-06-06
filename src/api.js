import axios from 'axios';

import {actionCreator} from "./reducer/user/user";
import {BASE_URL, ResponseStatus} from "./constants";

const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === ResponseStatus.FORBIDDEN) {
      history.pushState(null, null, `/login`);
      dispatch(actionCreator.requireAuthorization(true));
    }
    if (err.response.status === ResponseStatus.BAD_REQUEST) {
      dispatch(actionCreator.requireAuthorization(true));
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
