import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./Wishlist.css";
import wishlist from "../../assets/images/wishlist.png"
import WishlistItems from './sub-component/WishlistItems';
import { useWishlist } from 'contexts/wishlist-context';

const Wishlist = () => {

  const { wishlistData, handleRemoveWishlist } = useWishlist();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [])


  return (
    <>
      {
        wishlistData.length > 0 ?
          <div className='wishlist-data'>
            <WishlistItems />
          </div>
          :
          <>
            <div className="wishlist-container">
              <div className="wishlist">Your wishlist is empty</div>
              <img className='wishlist-img' src={wishlist} alt="wishlist" />
              <br />
              <Link className='goto-productpage shop-now' to="/products"><button className='wishlist-btn'>Shop now</button></Link>
            </div>
            <div >
              {/* <WishlistItems /> */}

            </div>
          </>
      }

    </>
  )
}

export default Wishlist