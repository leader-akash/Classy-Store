import React from 'react'
import {Link} from 'react-router-dom';
import "./Wishlist.css";
import wishlist from "../../assets/images/wishlist.png"
import WishlistItems from './sub-component/WishlistItems';

const Wishlist = () => {



  return (
    <>
    <div className="wishlist-container">
    <div className="wishlist">Your wishlist is empty</div>
    <img className='wishlist-img' src={wishlist} alt="wishlist" />
    <br />
    <Link className='goto-productpage shop-now' to="/products"><button className='wishlist-btn'>Shop now</button></Link>
    </div>
    <div >
    <WishlistItems />
    </div>
    </>
  )
}

export default Wishlist