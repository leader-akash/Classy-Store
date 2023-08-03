import React, { useState, useEffect } from 'react';
import "./Card.css"
import { useUser } from 'contexts/user-context';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from 'contexts/cart-context';
import { useWishlist } from 'contexts/wishlist-context';

const details = {

}

const Card = ({ image, description, price, marketPrice, label, labelStyle, rating, _id }) => {

  const navigate = useNavigate();
  const [isProductAddedToCart, setIsProductAddedToCart] = useState(false);
  const [isProductAddedToWishlist, setIsProductAddedToWishList] = useState(false);
  const { addToCart, setAddToCart, cartData } = useCart();
  const { addToWishlist, setAddToWishlist, wishlistData, handleRemoveWishlist } = useWishlist();

  const { getToken } = useUser();


  const handleAddtoCart = () => {
    setAddToCart({ image, description, price, marketPrice, label, labelStyle, rating, _id })
    console.log("handleCart")
  }

  const handleAddtoWishlist = (_id) => {
    if(wishlistData?.findIndex((el)=> el._id === _id) !== -1){
      handleRemoveWishlist(_id)
    }
    else{
      setAddToWishlist({ image, description, price, marketPrice, label, labelStyle, rating, _id })
    }
  }

  // const handleRemoveWishlist = (_id) => {
  //   if (wishlistData?.length > 0 && getToken) {
  //     setAddToWishlist({ image, description, price, marketPrice, label, labelStyle, rating, _id })
  //   }
  // }


  return (
    <>
      <div className="card-container1 card-center-section" >
        <div className="card-header">
          <div className={`badge ${labelStyle} card-badge`}>{label}</div>

        </div>
        <div><img className=" card-image" src={image} alt="card" /></div>
        <p className="card-info1 item-des">{description}</p>
        <div className="card-price1">
          <div className='our-price' style={{ color: 'red', fontWeight: ' bold', fontSize: '16px', paddingRight: '5px' }}>{price}</div>
          <div className='market-price' style={{ fontSize: '14px' }}> <strike>{marketPrice}</strike></div>
          <div className="rating-section">{rating}<i class="fa-solid fa-star"></i></div>
        </div>

        <div className="card-button1 card-action">
          {

            cartData.findIndex((element) => element._id === _id) !== -1 && getToken ?
              <Link className='btn-style' to="/cart" >
                <button className="add goto-cart" >

                  Go to Cart
                </button>
              </Link>
              :
              <button className="add" onClick={() => { getToken ? handleAddtoCart() : navigate("/login") }}>
                Add to Cart
              </button>
          }
          <button className="like like-heart wishlist-heart" onClick={() => { getToken ? handleAddtoWishlist() : navigate("/login") }}>
          {
            console.log('console', wishlistData, "id", _id)
          }
            {
              wishlistData.findIndex((element) => element._id === _id) !== -1 && getToken ?
                <i className="far fa-heart fa-2x" ></i>
                :
                <i className="fa fa-heart fa-2x red-heart"></i>
            }
          </button>

        </div>
      </div>
    </>
  )
}

export default Card