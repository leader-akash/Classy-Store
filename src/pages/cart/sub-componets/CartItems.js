import axios from 'axios';
import HorizontalCard from 'components/cards/horizontalCard/HorizontalCard';
import { useUser } from 'contexts/user-context';
import React, { useEffect, useState } from 'react'

const CartItems = () => {

    const [cartItem, setCartItem] = useState([]);
    const { getToken } = useUser();


    useEffect(() => {
        axios.get(`/api/user/cart`, {
            headers: {
                authorization: getToken,
            }
        })
            .then((res) => {
                setCartItem(res.data.cart)
            })
            .catch((err) => {
                console.log("err-horiz", err);
            })
    }, [getToken])

    


    return (
        <div>
            {
                cartItem.map((el, i) => {
                    return (
                        <HorizontalCard
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

export default CartItems