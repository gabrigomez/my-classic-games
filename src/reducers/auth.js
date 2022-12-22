import { EDIT_USER, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS } from "../actions/types";

const user = JSON.parse(localStorage.getItem("token"));

const initialState = user 
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null};

export default function auth (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case EDIT_USER: 
      if (user.id === payload.id) {
        return {
          ...state,
          ...payload          
        };
      } else {
        return user;
      }
    default:
      return state;
  }
}