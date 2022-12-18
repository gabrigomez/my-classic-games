import axios from 'axios';

const API_URL = "http://localhost:3001/"

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  })
};

const login = (email, password) => {
  return axios.post(API_URL + "auth/login", {
    email,
    password: password,
  })
  .then((res) => {
    if (res.status === 201) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
    }
    return res.data;
  })
}

const logout = () => {
  localStorage.removeItem("user");
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
  logout
} 