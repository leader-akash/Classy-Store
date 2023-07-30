import Mockman from "mockman-js";
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HomePage } from './pages'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import ProductPage from './pages/productPage/ProductPage';
import Footer from './components/footer/Footer';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Wishlist from './pages/wishList/Wishlist';
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
      <Footer />
    </>

  );
}

export default App;
