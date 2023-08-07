import React, { createContext, useContext, useEffect, useState } from 'react'
import { useUser } from './user-context';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';


const WishlistContext = createContext(null)

const WishlistProvider = ({ children }) => {

  const navigate = useNavigate();

  const { getToken } = useUser();
  const [wishlistData, setWishlistData] = useState([]);

  // add to wishlist 
  const addToWishlist = (prod) => {
    if (getToken) {
console.log('pppp', prod)
      axios.post(`/api/user/wishlist`, {
        product: prod
      }, {
        headers: {
          authorization: getToken
        }
      }
      ).then((res) => {
        toast.success("Added to Wishlist 🎉")
        console.log(res, 'resssss')
        setWishlistData(res?.data?.wishlist)
      })
        .catch((error) => {
          console.log("card-error", error)
        })
    }
    //   else{
    //       navigate("/login")
    //   }
  }
  // },[addToWishlist, ])

// get all wishlist
  const getAllWishlistData = () => {
    axios.get(`/api/user/wishlist`, {
      headers: {
        authorization: getToken
      }
    })
      .then((res) => {
        setWishlistData(res?.data.wishlist)
        console.log('dekh', res)
      })
      .catch((err) => {
        console.log("wisherr", err)
      })
  }

  useEffect(() => {
    console.log('logggg')
    getAllWishlistData()
  }, [])

  

  const handleRemoveWishlist = (_id) => {
    axios.delete(`/api/user/wishlist/${_id}`,
      {
        headers: {
          authorization: getToken
        }
      })
      .then((res) => {
        toast.success("Removed from Wishlist")
        console.log("delete", res)
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
          authorization: getToken
        }
      })
      .then((res) => {
        toast.success("Removed from Wishlist")
        console.log("delete", res)
        setWishlistData(res?.data?.wishlist)
      })
      .catch((err) => {
        console.log("remerr", err)
      })
  }


  return (
    <WishlistContext.Provider value={{ addToWishlist, wishlistData, handleRemoveWishlist , handleRemoveFromWishlist}}>
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }