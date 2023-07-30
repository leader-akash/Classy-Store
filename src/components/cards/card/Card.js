import React, { useState, useEffect } from 'react';
import "./Card.css"
import { useUser } from 'contexts/user-context';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from 'contexts/cart-context';

const Card = ({ image, description, price, marketPrice, label, labelStyle, rating, id }) => {

    const [isProductAddedToCart, setIsProductAddedToCart] = useState(false);
    const [isProductAddedToWishlist, setIsProductAddedToCartToWishList] = useState(false);

    const { getToken } = useUser();

    // const {isInCart, cartData} = useCart();

    // const {state, dispatch} = useCart();

    const navigate = useNavigate();

    const product = {
        _id: id,
        image: image,
        description: description,
        price: price,
        marketPrice: marketPrice,
        label: label,
        labelStyle: labelStyle,
        rating: rating
    }
    const hanleAddToCart = () => {
        if(getToken){
   
        axios.post(`/api/user/cart`, {
            product
        }, {
            headers: {
                authorization: getToken
            }
        }
        ).then((res) => {
   
            // if(isInCart(id))
            setIsProductAddedToCart(false)
            // else{
                setIsProductAddedToCart(true);
            // }

            toast.success("Added to Cart 🎉")
        })
            .catch((error) => {
                console.log("card-error", error)
            })
        }
        else{
            navigate("/login")
        }
    }


    const handleWishList = () => {
        if(getToken){
        axios.post(`/api/user/wishlist`,
            { product }
            , {
                headers: {
                    authorization: getToken
                }
            })
            .then((res) => {
        
                toast.success("Added to WishList 🎉")
                setIsProductAddedToCartToWishList(true)

            })
            .catch((err) => {
                console.log("wishlist-err", err);
            })
            
        }
        else{
            navigate("/login")
        }

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

                            <button className="add" onClick={hanleAddToCart}>

                                Add to Cart
                            </button>
                    }
                    <div className="like like-heart ">
                        {
                            isProductAddedToWishlist ?
                                <i className="fa fa-heart fa-2x red-heart" onClick={handleWishList}></i>
                                :
                                <i className="far fa-heart fa-2x" onClick={handleWishList}></i>
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default Card