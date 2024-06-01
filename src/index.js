import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './store/cartSlice'
import categoryReducer from './store/categorySlice'
import userReducer from './store/userSlice'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));


const store = configureStore({
  reducer: {
    cartState: cartReducer,
    categoryState : categoryReducer,
    userState : userReducer
  }
})

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

);
