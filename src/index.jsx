/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './app/App';
import './index.css';

const container = document.getElementById('react-root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
