import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios';

const API_URL = "http://localhost:3001/"

export const login = createAsyncThunk('auth/login', async(email, password) => {
  try {
    const response = await axios.post(`${API_URL}auth/login`, email, password);
    return response.data; 
  } catch (error) {
    return error.response.data.msg;
  }
}) 

export const register = createAsyncThunk('auth/register', async(username, email, password, confirmPassword) => {
  try {
    const response = await axios.post(`${API_URL}auth/register`, username, email, password, confirmPassword);
    return response;
  } catch (error) {
    return error;
  }
})


const userSlice = createSlice({
  name: 'users',
  initialState: {
    user: null,
    isLoggedIn: false,
    isSuccess: false,
    message: '',
    loading: false
  },
  reducers: {
    clearMessage: (state) => {
      state.message = ''
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.message = action.payload;
      state.isLoggedIn = action.payload.user ? true : false;
      state.loading = false;
      state.user = action.payload.user;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      if(action.payload.status === 201) {
        state.isSuccess = true;
        state.message = action.payload.data.msg;
      } else {
        state.isSuccess = false;
        state.message = action.payload.response.data.msg;
      };      
    });
  }
});


export const { clearMessage } = userSlice.actions
export default userSlice.reducer