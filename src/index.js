
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './features/contactsSlice';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
