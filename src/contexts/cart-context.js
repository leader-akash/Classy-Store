import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { useProduct } from './products-context';
import { useUser } from './user-context';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const CartContext = createContext(null);

const CartProvider = ({children}) => {

  const navigate = useNavigate();

      // const { allProducts, setAllProducts } = useProduct();

      const [addToCart, setAddToCart] = useState();
      const [cartData, setCardData] = useState([]);
      console.log("cart", addToCart)
      const {getToken} = useUser();

      const token = localStorage.getItem("token")

    //   const details = {
    //     _id: id,
    //     image: image,
    //     description: description,
    //     price: price,
    //     marketPrice: marketPrice,
    //     label: label,
    //     labelStyle: labelStyle,
    //     rating: rating
    // }

    useEffect(()=>{
      if(token){
   
        axios.post(`/api/user/cart`
        , {
          product: addToCart
         }, {
            headers: {
                authorization: token
            }
        }
        ).then((res) => {
            console.log(res, "addtocart", addToCart)
            // setCardData(res.data.cart)
            toast.success("Added to Cart 🎉")
        })
            .catch((error) => {
                console.log("card-error", error)
            })
        }
        // else{ 
        //     navigate("/login")
        // }
    },[addToCart])

    useEffect(()=>{
      axios.get(`/api/user/cart`,{
        headers : {
          authorization: token
        }
      })
      .then((res)=>{
        console.log("addsad", res)
        setCardData(res.data.cart)
      })
      .catch((err)=>{
        console.log("cartErr", err)
      })
    },[addToCart])






  return (

    <CartContext.Provider value={{addToCart,setAddToCart, cartData}}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext);

export {CartProvider, useCart}