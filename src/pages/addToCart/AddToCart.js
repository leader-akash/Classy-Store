import React from 'react';
import "./AddToCart.css"
import {Link} from 'react-router-dom';
import shopcart from "../../assets/images/shopcart.png"
import HorizontalCard from '../../components/cards/horizontalCard/HorizontalCard';
import PriceList from '../../components/priceList/PriceList';


const AddToCart = () => {
    return (
        <>
        <div className="shopcart-container">
        <div className="shopcart">Your cart is empty</div>
        <img className='shopcart-img' src={shopcart} alt="shopcart" />
        <br />
        <button className='shopcart-btn'><Link className='goto-productpage' to="/product">Shop now</Link></button>
        </div>

        <div className='flex cart-center'>
        <HorizontalCard />

        <PriceList />
        </div>
        </>
      )
}

export default AddToCart

