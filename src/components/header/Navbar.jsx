import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useSearchParams } from "react-router-dom";
import { useUser } from "contexts/user-context";
const Navbar = () => {
   const { getToken, setGetToken } = useUser();
   // const [isUserLoggedin, setIsUserLoggedin] = useState(false);

   // const tokenVal = localStorage.getItem("token");

   // useEffect(() => {
   //     const tokenVal = localStorage.getItem("token");

   //     if (tokenVal) {
   //         setIsUserLoggedin(true)
   //     } else {
   //         setIsUserLoggedin(false)
   //     }

   // }, [localStorage.getItem("token")])

   const handleLogout = () => {
      localStorage.clear();
      setGetToken("");
   }

  
   console.log("getToken", getToken)

   return (
      <div className="nav-two-container navbar-wrapper">
      
         <Link className="logo-hover" to="/"><div className="logo">Classy Store</div></Link>
         <div class="search-bar">
            <input className="search-input" type="text" placeholder="Search classy-store.netlify.app" />
            <i className="fa-solid fa-magnifying-glass "></i>
         </div>
         <div className="button-right">
         <div className="icon-setting1">
            <Link className="wishlist-badge" to="/wishlist">
               <span className="badge-icon">
                  <span className="badge red">0</span>
                  <i className="fa-regular fa-heart"> </i>
               </span>
            </Link>
         </div>
         <div className="icon-setting2">
            <Link className="addtocart-badge" to="/cart">
               <span className="badge-icon">
                  <span className="badge blue">0</span>
                  <i className="fa-solid fa-cart-shopping " ></i>
               </span>
            </Link>
         </div>
         {

            !getToken ?
               <Link className="signin-link" to="/login">
               <button className="sign-in">
                  Login
                  {/* <i className="fa-regular fa-user"></i> */}
               </button>
               </Link>
               :
               <Link className="signin-link" to="/">
                  <button className="sign-in sign-out" onClick={handleLogout}>
                     Logout
                     {/* <i className="fa-regular fa-user"></i> */}
                  </button>
               </Link>
         }

         </div>

      </div>
   );
}

export default Navbar;