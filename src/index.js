import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store'

import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { persistStore } from 'redux-persist';

const container = document.getElementById("root");
const root = createRoot(container);

const persistor = persistStore(store)

root.render(
  <React.StrictMode>
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
