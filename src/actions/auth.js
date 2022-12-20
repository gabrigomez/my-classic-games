import AuthService from "../services/auth.service"
import { CLEAR_MESSAGE, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS, SET_MESSAGE } from "./types";

export const register = (username, email, password, confirmPassword) => (dispatch) => {
  return AuthService.register(username, email, password, confirmPassword).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });      

      return Promise.resolve();
    },
    (error) => {
      const message = error.response.data.msg;
      
      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch( {
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then(
    (response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: response }
      });

      return Promise.resolve();
    },
    (error) => {
      const message = error.response.data.msg;

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};

export const closeError = () => (dispatch) => {
  dispatch({
    type: CLEAR_MESSAGE,
  })
};