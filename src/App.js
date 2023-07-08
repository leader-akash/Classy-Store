import './App.css';
import { ReactDOM } from 'react';
import HomePage from './pages/HomePage'
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import ProductPage from './pages/productPage/ProductPage';
import Footer from './components/footer/Footer';
import Signup from './pages/signupPage/Signup';
import Login from './pages/loginPage/Login';
import Wishlist from './pages/wishList/Wishlist';
import AddToCart from './pages/addToCart/AddToCart';

function App() {
  return (
   <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/addtocart" element={<AddToCart />} />
    </Routes>

    <Footer />
   </>
    
  );
}

export default App;
