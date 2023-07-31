import React, { useEffect, useState } from 'react';
import "./Cart.css"
import {Link} from 'react-router-dom';
import shopcart from "../../assets/images/shopcart.png"
import PriceList from '../../components/priceList/PriceList';
import { useUser } from 'contexts/user-context';
import axios from 'axios';
import CartItems from './sub-componets/CartItems';
import { useCart } from 'contexts/cart-context';


const Cart = () => {

  // const {cartData} = useCart();

  // const {getToken} = useUser();

  // useEffect(()=>{

  //   axios.get(`/api/user/cart`, {
  //     headers : {
  //       authorization: getToken
  //     }
  //   })
  //   .then((res)=>{
  //     console.log("added", res.data.cart);
  //   })
  //   .catch((err)=>{
  //     console.log("addError", err);
  //   })

  // },[])
  
    return (
        <>
        <div className="shopcart-container">
        <div className="shopcart">Your cart is empty</div>
        <img className='shopcart-img' src={shopcart} alt="shopcart" />
        <br />
        <Link className='goto-productpage shop-now' to="/products"><button className='shopcart-btn'>Shop now</button></Link>
        </div>

        <div className='flex cart-center'>
        <div className='horiz-card-alignment'>
        <CartItems />
        </div>

        <PriceList />
        </div>
        </>
      )
}

export default Cart

