import React, { createContext, useContext, useReducer } from 'react'

const CartContext = createContext(null);

const CartProvider = ({children}) => {

  // const cartReducer = (state, action) => {
  //   switch(action.type) {
      
  //   }
  // }

  // const [state, dispatch] = useReducer(cartReducer, {cartItems, totalPrice})

  return (

    <CartContext.Provider value={{}}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext);

export {CartProvider, useCart}