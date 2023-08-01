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
    const [wishlistData, setWishlistData] = useState([]);

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
        //   else{
        //       navigate("/login")
        //   }
      },[addToWishlist])
      
      useEffect(()=>{
        axios.get(`/api/user/wishlist`,{
            headers:{
                authorization: getToken
            }
        })
        .then((res)=>{
            setWishlistData(res.data.wishlist)
        })
        .catch((err)=>{
            console.log("wisherr", err)
        })
      },[addToWishlist])

      const handleRemoveWishlist = (id) => {
        axios.delete(`/api/user/cart/${id}`,
        {headers: {
            authorization: getToken
      }})
      .then((res)=>{
        console.log("remwish", res)
      })
      .catch((err)=>{
        console.log("remerr", err)
      })
      }


  return (
    <WishlistContext.Provider value={{addToWishlist, setAddToWishlist, wishlistData, handleRemoveWishlist}}>
        {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = ()=> useContext(WishlistContext)

export {WishlistProvider, useWishlist}