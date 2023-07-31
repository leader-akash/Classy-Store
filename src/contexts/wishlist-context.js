import React, { createContext, useContext, useEffect, useState } from 'react'
import { useUser } from './user-context';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';


const WishlistContext = createContext(null)

const WishlistProvider = ({children}) => {

    const navigate = useNavigate();

    const [addToWishlist, setAddToWishlist] = useState();
    const {getToken} = useUser(); 

    useEffect(()=>{
        if(getToken){
     
          axios.post(`/api/user/wishlist`, {
           product: addToWishlist
          }, {
              headers: {
                  authorization: getToken
              }
          }
          ).then((res) => {
     
              toast.success("Added to Wishlist 🎉")  
          })
              .catch((error) => {
                  console.log("card-error", error)
              })
          }
          else{
              navigate("/login")
          }
      },[addToWishlist])
    



  return (
    <WishlistContext.Provider value={{addToWishlist, setAddToWishlist}}>
        {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = ()=> useContext(WishlistContext)

export {WishlistProvider, useWishlist}