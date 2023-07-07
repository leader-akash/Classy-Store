import './App.css';
import { ReactDOM } from 'react';
import HomePage from './pages/HomePage'
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Login from './pages/Login';
import ProductPage from './pages/productPage/ProductPage';

function App() {
  return (
   <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
   </>
    
  );
}

export default App;
