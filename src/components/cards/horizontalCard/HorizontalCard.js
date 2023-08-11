import React, { useState } from 'react'
import "./HorizontalCard.css"
import axios from 'axios'
import { useUser } from 'contexts/user-context';
import { toast } from 'react-toastify';
import { useWishlist } from 'contexts/wishlist-context';
import { useCart } from 'contexts/cart-context';
import { useNavigate } from 'react-router-dom';


const HorizontalCard = ({ image, description, price, marketPrice, label, labelStyle, rating, _id }) => {

    const [isProductAdded, setIsProductAdded] = useState(false);
    const { addToWishlist, wishlistData, handleRemoveWishlist } = useWishlist();

    const { handleRemoveCart } = useCart();

    const [count, setCount] = useState(1);

    const navigate = useNavigate();

    const { getToken } = useUser();
    const product = {
        _id: _id,
        image: image,
        description: description,
        price: price,
        marketPrice: marketPrice,
        label: label,
        labelStyle: labelStyle,
        rating: rating
    }
    const handleAddtoWishlist = (_id) => {
        if (wishlistData?.findIndex((el) => el._id === _id) !== -1) {
            handleRemoveWishlist(_id)
        }
        else {
            addToWishlist({ image, description, price, marketPrice, label, labelStyle, rating, _id })
        }
    }


    const handleIncreaseCartItem = () => {
        setCount(count + 1)
    }

    const handleDecrease = () => {
        setCount(count - 1)
    }

    

    //  here
    return (
        <div className="card-container-horiz">
            <div className="card-header card-action">
            {
                label &&
                <div className="badge green card-badge-horiz label-horiz label-padding" >{label}</div>
            }
                {/* <div className="card-cancel-horiz" onClick={(e) => dispatch({type: "REMOVE_CART", payload: _id})}>X</div> */}
                <div className="card-cancel-horiz cancel-btn" onClick={() => handleRemoveCart(_id)}>X</div>
            </div>
            <div className="card-padding">
                <div>
                    <img className="card-img-horiz horiz-img" src={image} alt="card" />
                    <br />
                    <div className='flex fix-count'>
                        <button className="count-btn" onClick={handleDecrease}
                        disabled = {count === 1 ? true : false}
                        >-</button>
                        <span className='count-item'> {count} </span>
                        <button className="count-btn" onClick={handleIncreaseCartItem}>+</button>
                    </div>
                </div>
                <div><p className="card-info-horiz">{description}</p>
                    <div className="card-price-horiz">
                        <div
                            style={{ color: 'red', fontWeight: 'bold', fontSize: '16px', paddingRight: '5px', }}
                        >
                            {price}
                        </div>
                        <div style={{ fontSize: '13px' }}><strike>{marketPrice}</strike></div>
                        <div className="rating">{rating}<i class="fa-solid fa-star"></i></div>
                    </div>
                    <div className="card-button-horiz move-cart" onClick={() => { getToken ? handleAddtoWishlist(_id) : navigate("/login") }}>
                        {/* <div className="like"><i className="far fa-heart fa-2x"></i></div> */}
                        {
                            wishlistData.findIndex((element) => element._id === _id) !== -1 && getToken ?
                                <button className="add remove-wishlist">Remove from Wishlist</button>
                                :
                                <button className="add add-wish" >Add to Wishlist</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalCard