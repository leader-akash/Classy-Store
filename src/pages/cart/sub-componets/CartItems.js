import axios from 'axios';
import HorizontalCard from 'components/cards/horizontalCard/HorizontalCard';
import { useCart } from 'contexts/cart-context';
import { useUser } from 'contexts/user-context';
import React, { useEffect, useState } from 'react'

const CartItems = () => {

    const [cartItem, setCartItem] = useState([]);
    const { getToken } = useUser();
    const { addToCart, cartData } = useCart();

    console.log("cartData", cartData)
    // useEffect(() => {
    //     axios.get(`/api/user/cart`, {
    //         headers: {
    //             authorization: getToken,
    //         }
    //     })
    //         .then((res) => {
    //             setCartItem(res.data.cart)
    //         })
    //         .catch((err) => {
    //             console.log("err-horiz", err);
    //         })
    // }, [getToken])



console.log('cartData', cartData)
    return (
        <div>
            {
                cartData.map((el, i) => {
                    return (
                        <HorizontalCard
                            key={i}
                            _id={el._id}
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

export default CartItems