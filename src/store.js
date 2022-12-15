import { configureStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const middleware = [thunk];

export const store = configureStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);