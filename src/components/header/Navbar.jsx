import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="nav-two-container">
            <div className="logo"><Link className="logo-hover" to="/">Classy Store</Link></div>
            <div class="search-bar">
                <input className="search-input" type="text" placeholder="Search classy-store.netlify.app" />
                <i className="fa-solid fa-magnifying-glass "></i>
            </div>

            <div className="icon-setting1">
            <Link className="wishlist-badge" to="./wishlist">
                <span className="badge-icon">
                    <span className="badge red">0</span>
                    <i className="fa-regular fa-heart"> </i>
                </span>
                </Link>
            </div>
            <div className="icon-setting2">
                <Link className="addtocart-badge" to="./addtocart">
                <span className="badge-icon">
                    <span className="badge blue">0</span>
                    <i className="fa-solid fa-cart-shopping " ></i>
                </span>
                </Link>
            </div>
            <button className="sign-in"><Link className="signin-link" to="/login">
                {/* <i className="fa-regular fa-user"></i> */}
                Login </Link></button>

        </div>
    );
}

export default Navbar;