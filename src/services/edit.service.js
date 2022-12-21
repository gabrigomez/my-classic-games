import axios from 'axios';

const API_URL = "http://localhost:3001/"

export const editUsername = (username, id) => {
  return axios.put(API_URL + `user/${id}`, {
    username
  });
}



