import axios from "axios";

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";

export const fetchUsersRequest = () => {
  return { type: FETCH_USERS_REQUEST };
};

export const fetchUsersSuccess = (users) => {
  return { type: FETCH_USERS_SUCCESS, payload: users };
};

export const fetchUsersFailure = (error) => {
  return { type: FETCH_USERS_FAILURE, payload: error };
};

export const fetUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};
