import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios';

const API_URL = "http://localhost:3001/"

export const login = createAsyncThunk('auth/login', async(email, password) => {
  try {
    const response = await axios.post(`${API_URL}auth/login`, email, password);
    console.log(response.data)
    return response.data; 
  } catch (error) {
    return error.response.data.msg;
  }
}) 

export const register = createAsyncThunk('auth/register', async(username, email, password, confirmPassword, {rejectedWithValue}) => {
  try {
    const response = await axios.post(`${API_URL}auth/register`, username, email, password, confirmPassword);
    return response.data;
  } catch (error) {
    console.log(error.response)
    return rejectedWithValue (error.response);
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
    closeError: (state) => {
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
      state.message = action.payload
    });
    builder.addCase(register.rejected, (state, action) => {
      state.message = action.payload
      state.isSuccess = action.payload
    });

  }
});


export const { closeError } = userSlice.actions
export default userSlice.reducer