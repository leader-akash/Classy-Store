import React from 'react';
import image from '../images/img4.png';  
import "./HomePage.css";

const MainPage = () =>{
    return (
    <>
	    <div class="nav-two-container">
            <div class="logo">Classy Store</div>
                <div class="search-bar">
                    <input class="search-input" type="text" placeholder="Search classy-store.com" />
                    <i class="fa-solid fa-magnifying-glass "></i>
                </div>
    {/* <div class="item-list"> */}
    <div className="icon-setting1">
    <span class="badge-icon">
    <span class="badge red">20+</span>
    <i class="fa-regular fa-heart"> </i>
    </span>
    </div>
    <div className="icon-setting2">
    <span class="badge-icon">
    <span class="badge blue">20+</span>
    <i class="fa-solid fa-cart-shopping " ></i>
    </span>
    </div>
    {/* </div> */}
    <button class="sign-in">
    <i class="fa-regular fa-user"></i>
    Sign In</button>
    
    </div>

<div className="welcome">
    <img className="img-settings" src={image} alt="img here"/>
 
    Welcome to the <span className="logo-bold">Classy Store !</span>

    <div className="greeting">Exciting Products, Exciting Deals, Exciting Discounts !!</div>

    <button className="explore">Explore</button>

    <div className="comment">Made with 💖 by Akash</div>
</div>


    </>
);

}

export default MainPage;