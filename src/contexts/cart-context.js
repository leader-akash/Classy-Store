import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { useProduct } from './products-context';
import { useUser } from './user-context';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const CartContext = createContext(null);

const CartProvider = ({ children }) => {

  const navigate = useNavigate();

  // const { allProducts, setAllProducts } = useProduct();

  const [addToCart, setAddToCart] = useState();
  const [cartData, setCartData] = useState([]);
  const { getToken } = useUser();

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

  useEffect(() => {
    if (token && addToCart) {

      axios.post(`/api/user/cart`
        , {
          product: addToCart
        }, {
        headers: {
          authorization: token
        }
      }
      ).then((res) => {
        toast.success("Added to Cart 🎉")
      })
        .catch((error) => {
          console.log("card-error", error)
        })
    }
    // else{ 
    //     navigate("/login")
    // }
  }, [addToCart])


  const getAllCartData = () => {
    axios.get(`/api/user/cart`, {
      headers: {
        authorization: token
      }
    })
      .then((res) => {
        setCartData(res?.data?.cart)
      })
      .catch((err) => {
        console.log("cartErr", err)
      })
  }

  useEffect(() => {
    getAllCartData();
  }, [addToCart])


  const handleRemoveCart = (_id) => {
    axios.delete(`/api/user/cart/${_id}`, {
      headers: {
        authorization: getToken
      }
    })
      .then((res) => {
        setCartData(cartData);
        getAllCartData();
      })

  }

  const cartReducer = (state, action) => {
    if (action.type === "REMOVE_ITEM") {
      let updatedCart = state.cartItems.filter((currItem) => currItem._id !== action.payload)
      return {
        ...state,
        cartItems: updatedCart,
      }
    }
    return state;
  }

  const initialState = {
    cartItems: []
  }

  const [state, dispatch] = useReducer(cartReducer, initialState);



  return (

    <CartContext.Provider value={{ addToCart, setAddToCart, cartData, state, dispatch,setCartData, handleRemoveCart }}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext);

export { CartProvider, useCart }