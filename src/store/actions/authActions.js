import * as api from "../../api";
import { openAlertMessage } from "./alertAction";

export const authAction = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

export const getAction = (dispatch) => {
  return {
    login: (userDetails, history) => dispatch(login(userDetails, history)),
    register: (userDetails, history) =>
      dispatch(register(userDetails, history)),
    SetUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
  };
};

const setUserDetails = (userDetails) => {
  return {
    type: authAction.SET_USER_DETAILS,
    userDetails,
  };
};

const login = (userDetails, history) => {
  return async (dispatch) => {
    const response = await api.login(userDetails);
    if (response.error) {
      console.log(response);
      dispatch(openAlertMessage(response?.err?.response?.data));
    } else {
      const { userDetails } = response.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      history("/dashboard");
    }
  };
};

const register = (userDetails, history) => {
  return async (dispatch) => {
    const response = await api.register(userDetails);
    if (response.error) {
      console.log(response);
      dispatch(openAlertMessage(response?.err?.response?.data));
    } else {
      const { userDetails } = response.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      history("/dashboard");
    }
  };
};
