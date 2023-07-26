import axios from 'axios';
import Card from 'components/cards/card/Card';
import { useUser } from 'contexts/user-context';
import React, { useState, useEffect } from 'react'

const WishlistItems = () => {

   const [wishlistItem, setWishlistItem] = useState([]);
   const { getToken } = useUser();

   
   useEffect(() => {

      axios.get(`/api/user/wishlist`, {
         headers: {
            authorization: getToken
         }
      }).then((res) => {
         console.log("wish-added ?", res.data.wishlist);
         setWishlistItem(res.data.wishlist);
      })
         .catch((err) => {
            console.log("wish-err", err);
         })

   }, [getToken])

   return (
      <div className='flex wishlist-wrap'>
         {
            wishlistItem.map((el, i) => {
               return (
                  <Card
                     key={i}
                     image={el.image}
                     description={el.description}
                     price={el.price}
                     marketPrice={el.marketPrice}
                     label={el.label}
                     labelStyle={el.labelStyle}
                     rating={el.rating}
                     category={el.category}
                  />
               )
            })
         }
      </div>
   )
}

export default WishlistItems