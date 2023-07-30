import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { makeServer } from "./server";
import { UserProvider } from 'contexts/user-context';
import { FilterProvider } from 'contexts/filter-context';
import { ProductProvider } from 'contexts/products-context';
import {CartProvider} from 'contexts/cart-context';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Call make Server
makeServer();


root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
      <CartProvider>
      <ProductProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
      </ProductProvider>
      </CartProvider>
      </UserProvider>
        
    </Router>
  </React.StrictMode>
);


