import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { CssBaseline } from '@mui/material';

import {persistor, store} from "./store";
import App from './App';


ReactDOM.render(
  <React.StrictMode>
      <HashRouter>
          <CssBaseline />
          <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                  <App />
              </PersistGate>
          </Provider>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

