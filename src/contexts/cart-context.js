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
      console.log("cart", addToCart)
      const {getToken} = useUser();

    //   const product = {
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
      if(getToken){
   
        axios.post(`/api/user/cart`, {
         product: addToCart
        }, {
            headers: {
                authorization: getToken
            }
        }
        ).then((res) => {
   
            toast.success("Added to Cart 🎉")
        })
            .catch((error) => {
                console.log("card-error", error)
            })
        }
        else{
            navigate("/login")
        }
    },[addToCart])


    const handleAddtoCart = () => {
      // if(addToCart.findIndex((el) => el._id === _id) !== -1)
      
    }



  return (

    <CartContext.Provider value={{addToCart,setAddToCart}}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext);

export {CartProvider, useCart}