import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const API_URL = "http://localhost:3001/"
const user = JSON.parse(localStorage.getItem("token"));


export const login = createAsyncThunk('auth/login', async(email, password) => {
  try {
    const response = await axios.post(`${API_URL}auth/login`, email, password);
    return response.data;    

  } catch (error) {
    return error.message
  }
}) 

const userSlice = createSlice({
  name: 'users',
  initialState: {
    user: user? user : null,
    isLoggedIn: user? true : false,
    message: '',
    loading: false
  },
  reducers: {
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.isSuccess = true;
      state.user = payload.user;
      state.isLoggedIn = true
    },
    [login.rejected]: (state, {payload}) => {
      state.message = payload.msg;
      state.loading = false;
      state.isSuccess = false; 
      state.isLoggedIn = true
    }
  }
});


// export const { login } = userSlice.actions
export default userSlice.reducer