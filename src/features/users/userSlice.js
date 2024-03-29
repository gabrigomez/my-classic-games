import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios';

const API_URL = "https://my-classic-games-api.vercel.app/"

export const login = createAsyncThunk('login', async(email, password) => {
  try {
    const response = await axios.post(`${API_URL}auth/login`, email, password);
    return response; 
  } catch (error) {
    return error;
  };
});

export const register = createAsyncThunk('register', async(username, email, password, confirmPassword) => {
  try {
    const response = await axios.post(`${API_URL}auth/register`, username, email, password, confirmPassword);
    return response;
  } catch (error) {
    return error;
  };
});

export const editUser = createAsyncThunk('edit user', async({username, email, id}) => {
  try {
    const response = await axios.put(`${API_URL}user/${id}`, {username, email});
    return response;
  } catch (error) {
    return error;
  };
});

export const addGame = createAsyncThunk('add game', async({ title, genre, description, imageUrl, id}) => {
  try {
    const response = await axios.post(`${API_URL}game/${id}`, {title, genre, description, imageUrl});
    return response;
  } catch (error) {
    return error;
  }
});

export const getGame = createAsyncThunk('get game', async ({id}) => {
  try {
    const response = await axios.get(`${API_URL}game/${id}`, {id});
    return response;
  } catch (error) {
    return error
  };  
});

export const showGameDetails = createAsyncThunk('show game details', async ({id}) => {
  try {
    const response = await axios.get(`${API_URL}game/details/${id}`, {id});
    return response
  } catch (error) {
    return error;
  };
});

export const deleteGame = createAsyncThunk('delete a game', async({id}) => {
  try {
    const response = await axios.delete(`${API_URL}game/${id}`, {id});
    return response;
  } catch (error) {
    return error;
  };
});

export const editGame = createAsyncThunk('edit a game', async({ title, genre, description, imageUrl, id}) => {
  try {
    const response = await axios.put(`${API_URL}game/details/${id}`, {title, genre, description, imageUrl});
    return response;
  } catch (error) {
    return error;
  };
});

const initialState = {
  user: null,
  isLoggedIn: false,
  isSuccess: false,
  gameList: null,
  message: '',
  game: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clearMessage: (state) => {
      state.message = '';
    },
    clearSuccess: (state) => {
      state.isSuccess = false;
    },
    clearGame: (state) => {
      state.game = null;
    },
    logout: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      if(action.payload.status === 201) {
        state.isLoggedIn = true;
        state.user = action.payload.data.user;        
      } else {        
        state.message = action.payload.response.data.msg;
      };
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
    builder.addCase(editUser.fulfilled, (state, action) => {      
      state.user.username = action.payload.data.user.username;
      state.user.email = action.payload.data.user.email;
      state.message = action.payload.data.msg;
    });
    builder.addCase(addGame.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addGame.fulfilled, (state, action) => {
      state.loading = false;
      if(action.payload.status === 201) {
        if (state.gameList === null) {
          state.gameList = [action.payload.data.game];
        } else {
          state.gameList = [...state.gameList, action.payload.data.game];
        };
        state.message = action.payload.data.msg;
      } else {
        state.message = action.payload.response.data.msg;
      }
    });
    builder.addCase(getGame.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getGame.fulfilled, (state, action) => {
      state.loading = false;
      if(action.payload.status === 201 && !action.payload.data.msg) {
        state.gameList = action.payload.data;        
      } else {
        state.gameList = [];
      };
    });
    builder.addCase(showGameDetails.fulfilled, (state, action) => {
      if(action.payload.status === 201) {
        state.game = action.payload.data[0];
      };
    });
    builder.addCase(deleteGame.fulfilled, (state, action) => {
      for(let g = 0; g < state.gameList.length; g++) {
        if (state.gameList[g]._id === state.game._id) {
          state.gameList.splice(g, 1);
        };
      };
      if(state.gameList.length === 0) {
        state.gameList = initialState.gameList;
      }
      state.message = action.payload.data.msg;
    });
    builder.addCase(editGame.fulfilled, (state, action) => {
      for(let g = 0; g < state.gameList.length; g++) {
        if (state.gameList[g]._id === state.game._id) {
          state.gameList[g] = action.payload.data.game;
        };
      };
      state.message = action.payload.data.msg;
    })
  }
});


export const { clearMessage, clearSuccess, clearGame, logout } = userSlice.actions
export default userSlice.reducer