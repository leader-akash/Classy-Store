import React, { useState } from 'react';
import "./Card.css"
import { useUser } from 'contexts/user-context';
import axios from 'axios';
import { toast } from 'react-toastify';

const Card = ({ image, description, price, marketPrice, label, labelStyle, rating }) => {

//   const [isProductAdded, setIsProductAdded] = useState([]);


    const { getToken } = useUser();
    const product = {
        image: image,
        description: description,
        price: price,
        marketPrice: marketPrice,
        label: label,
        labelStyle: labelStyle,
        rating: rating
    }
    const hanleAddToCart = () => {

        console.log(getToken, "getTOken in cart")

        axios.post(`/api/user/cart`, {
            product
        }, {
            headers: {
                authorization: getToken
            }
        }
        ).then((res) => {
            console.log("cart", res.data.cart);
            toast.success("Added to Cart")
        })
            .catch((error) => {
                console.log("card-error", error)
            })

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
                    <button className="add" onClick={hanleAddToCart}>

                        Add to Cart
                    </button>
                    <div className="like like-heart "><i className="far fa-heart fa-2x"></i></div>
                </div>
            </div>
        </>
    )
}

export default Card