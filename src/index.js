import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {store, persistor} from './store'

import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById("root");
const root = createRoot(container);

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
