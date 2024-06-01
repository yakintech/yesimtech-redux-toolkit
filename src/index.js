import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './store/cartSlice'
import categoryReducer from './store/categorySlice'
import userReducer from './store/userSlice'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { supplierApi } from './services/supplierApi';

const root = ReactDOM.createRoot(document.getElementById('root'));


const store = configureStore({
  reducer: {
    cartState: cartReducer,
    categoryState : categoryReducer,
    userState : userReducer,
    [supplierApi.reducerPath]: supplierApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(supplierApi.middleware),
})

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

);
