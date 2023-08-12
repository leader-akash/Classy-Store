import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useLoaderData, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "contexts/user-context";
import { useFilter } from "contexts/filter-context";
import { useCart } from "contexts/cart-context";
import { useWishlist } from "contexts/wishlist-context";


const Navbar = () => {
  const { getToken, setGetToken } = useUser();
  const { searchItem, setSearchItem } = useFilter();
  const { cartData } = useCart();
  const { wishlistData } = useWishlist();

  const navigate = useNavigate();
  const location = useLocation();

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

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  }

  // const handleWishlistPrivacy =() => {
  //    if(!getToken){
  //       navigate("/login")
  //    }
  // }


  const handleSearchNavigation = () => {
    if (location.pathname !== "/products") {
      navigate("/products")
    }
  }

  return (
    <div className="nav-two-container navbar-wrapper">

      <Link className="logo-hover" to="/"><div className="logo">Classy Store</div></Link>
      <div className="search-bar" onClick={handleSearchNavigation}>
        <input className="search-input" type="search" placeholder="Search in Classy Store" onChange={handleSearch} />
        <i className="fa-solid fa-magnifying-glass "></i>
      </div>
      <div className="button-right responsive-btn">
        <div className="icon-setting1" >
          <Link className="wishlist-badge" to="/products">
            <span className="badge-icon">
              <i className="fa-solid fa-shop"></i>
            </span>
          </Link>
        </div>
        <div className="icon-setting1" >
          <Link className="wishlist-badge" to="/wishlist">
            <span className="badge-icon">
              <span className="badge red">{getToken ? (wishlistData?.length > 20 ? "20+" : wishlistData.length) : 0}</span>
              <i className="fa-regular fa-heart"> </i>
            </span>
          </Link>
        </div>
        <div className="icon-setting2" >
          <Link className="addtocart-badge" to="/cart">
            <span className="badge-icon">
              <span className="badge blue" > {getToken ? (cartData?.length > 20 ? "20+" : cartData.length) : 0} </span>
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