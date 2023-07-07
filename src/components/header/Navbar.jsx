import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () =>{

    return(
        <>
    <div class="nav-two-container">
    <div class="logo"><Link className="logo-hover" to="/">Classy Store</Link></div>
    <div class="search-bar">
    <input class="search-input" type="text" placeholder="Search classy-store.com" />
    <i class="fa-solid fa-magnifying-glass "></i>
    </div>
    {/* <div class="item-list"> */}
    <div className="icon-setting1">
    <span class="badge-icon">
    <span class="badge red">0</span>
    <i class="fa-regular fa-heart"> </i>
    </span>
    </div>
    <div className="icon-setting2">
    <span class="badge-icon">
    <span class="badge blue">0</span>
    <i class="fa-solid fa-cart-shopping " ></i>
    </span>
    </div>
    {/* </div> */}
    <button class="sign-in"><Link className="signin-link" to="/login">
    {/* <i class="fa-regular fa-user"></i> */}
    Sign In </Link></button>
    
    </div>
        </>
    );
}

export default Navbar;