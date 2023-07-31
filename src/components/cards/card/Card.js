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

const Card = ({ image, description, price, marketPrice, label, labelStyle, rating, id }) => {

  const navigate = useNavigate();
  const [isProductAddedToCart, setIsProductAddedToCart] = useState(false);
  const [isProductAddedToWishlist, setIsProductAddedToWishList] = useState(false);
  const { addToCart, setAddToCart } = useCart();
  const {addToWishlist, setAddToWishlist} = useWishlist();

  const { getToken } = useUser();

  const[authToken, setAuthToken] = useState("");

  useEffect(()=>{
    setAuthToken(getToken);
  },[])


  const handleAddtoCart = () => {
    setAddToCart({image, description, price, marketPrice, label, labelStyle, rating, id})
  }


  return (
    <>
      <div className="card-container1">
        <div className="card-header">
          <div className={`badge ${labelStyle} card-badge`}>{label}</div>

        </div>
        <div><img className=" card-image" src={image} alt="card" /></div>
        <p className="card-info1 item-des">{description}</p>
        <div className="card-price1">
          <div style={{ color: 'red', fontWeight: ' bold', fontSize: '16px', paddingRight: '5px' }}>{price}</div>
          <div style={{ fontSize: '14px' }}> <strike>{marketPrice}</strike></div>
          <div className="rating-section">{rating}<i class="fa-solid fa-star"></i></div>
        </div>

        <div className="card-button1 card-action">
          {

            isProductAddedToCart ?
              <Link to="/cart" >
                <button className="add goto-cart" >

                  Go to Cart
                </button>
              </Link>
              :


              <button className="add" onClick={handleAddtoCart}>

                Add to Cart
              </button>
          }
          <div className="like like-heart ">
            {
              isProductAddedToWishlist ?
                <i className="fa fa-heart fa-2x red-heart"></i>
                :
                <i className="far fa-heart fa-2x"  onClick={()=> setAddToWishlist({image, description, price, marketPrice, label, labelStyle, rating, id })}></i>
            }
          </div>

        </div>
      </div>
    </>
  )
}

export default Card