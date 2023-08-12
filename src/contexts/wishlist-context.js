import React, { createContext, useContext, useEffect, useState } from 'react'
import { useUser } from './user-context';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';


const WishlistContext = createContext(null)

const WishlistProvider = ({ children }) => {

  const navigate = useNavigate();

  const [wishlistData, setWishlistData] = useState([]);
const tokenVal = localStorage.getItem('token');

  // add to wishlist 
  const addToWishlist = (prod) => {
    if (tokenVal) {
      axios.post(`/api/user/wishlist`, {
        product: prod
      }, {
        headers: {
          authorization: tokenVal
        }
      }
      ).then((res) => {
        toast.success("Added to Wishlist 🎉")
        setWishlistData(res?.data?.wishlist)
      })
        .catch((error) => {
          console.log("card-error", error)
        })
    }

  }
  // },[addToWishlist, ])

  // get all wishlist
  const getAllWishlistData = () => {
    axios.get(`/api/user/wishlist`, {
      headers: {
        authorization: tokenVal
      }
    })
      .then((res) => {
        setWishlistData(res?.data.wishlist)
      })
      .catch((err) => {
        console.log("wisherr", err)
      })
  }

  useEffect(() => {
    getAllWishlistData()
  }, [])



  const handleRemoveWishlist = (_id) => {
    axios.delete(`/api/user/wishlist/${_id}`,
      {
        headers: {
          authorization: tokenVal
        }
      })
      .then((res) => {
        toast.success("Removed from Wishlist")
        setWishlistData(res?.data?.wishlist)
      })
      .catch((err) => {
        console.log("remerr", err)
      })
  }


  const handleRemoveFromWishlist = (_id) => {
    axios.delete(`/api/user/wishlist/${_id}`,
      {
        headers: {
          authorization: tokenVal
        }
      })
      .then((res) => {
        toast.success("Removed from Wishlist")
        setWishlistData(res?.data?.wishlist)
      })
      .catch((err) => {
        console.log("remerr", err)
      })
  }


  return (
    <WishlistContext.Provider value={{ addToWishlist, wishlistData, handleRemoveWishlist, handleRemoveFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }