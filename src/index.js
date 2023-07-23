import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { makeServer } from "./server";
import { UserProvider } from 'contexts/user-context';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Call make Server
makeServer();


root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <App />
      </UserProvider>
    </Router>
  </React.StrictMode>
);


