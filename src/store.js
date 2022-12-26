import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './features/users/userSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers ({
  users: userReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
  //composeWithDevTools(applyMiddleware(...middleware))
});
const persistor = persistStore(store);

export {store, persistor};