import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS } from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user 
  ? { isLoggedin: true, user }
  : { isLoggedin: false, user: null};

export default function auth (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedin: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedin: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedin: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedin: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedin: false,
        user: null,
      };
    default:
      return state;
  }
}