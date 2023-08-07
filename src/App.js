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
import { useEffect } from "react";
import RestrictAuth from "components/restrictedRoutes/RestrictAuth";
import RequireAuth from "components/restrictedRoutes/RequireAuth";

function App() {

  useEffect(()=>{
    window.scrollTo({top:0, left: 0, behavior: "smooth"})
  },[])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<RestrictAuth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route path="/products" element={<ProductPage />} />

        <Route element={<RequireAuth />} >
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        <Route path="/mockman" element={<Mockman />} />
      </Routes>
      <ToastContainer 
        position="top-center"
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
