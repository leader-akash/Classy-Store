import React from 'react'
import {Link} from 'react-router-dom';
import "./Wishlist.css";
import wishlist from "../../assets/images/wishlist.png"

const Wishlist = () => {
  return (
    <div className="wishlist-container">
    <div className="wishlist">Your wishlist is empty</div>
    <img className='wishlist-img' src={wishlist} alt="wishlist" />
    <br />
    <button className='wishlist-btn'><Link className='goto-productpage' to="/product">Shop now</Link></button>
    </div>
  )
}

export default Wishlist