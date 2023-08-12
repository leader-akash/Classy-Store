import axios from 'axios';
import Card from 'components/cards/card/Card';
import { useUser } from 'contexts/user-context';
import { useWishlist } from 'contexts/wishlist-context';
import React, { useState, useEffect } from 'react'

const WishlistItems = () => {

   const [wishlistItem, setWishlistItem] = useState([]);

   const { wishlistData } = useWishlist();

   return (
      <div className='flex wishlist-wrap'>
         {
            wishlistData?.map((el, i) => {
               return (
                  <Card
                     _id={el._id}
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