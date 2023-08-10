import React, { useEffect, useState } from 'react';
import "./Cart.css"
import { Link, useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import shopcart from "../../assets/images/shopcart.png"
import PriceList from '../../components/priceList/PriceList';
import CartItems from './sub-componets/CartItems';
import { useCart } from 'contexts/cart-context';



const Cart = () => {
  const navigate = useNavigate();
  const { cartData } = useCart();
  const [responseSummary, setResponseSummary] = useState({
    msg: false,
    id: null,
    cart: null
  })

  const { width, height } = useWindowSize();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [])

  useEffect(() => {
    let id = null;
    if (responseSummary?.msg) {
      id = setTimeout(() => {
        navigate("/products");
      }, 3000)
    }
  }, [responseSummary])

  return (

    <div>

      {responseSummary?.msg && (
        <>
          <div className="shopcart-container">

            <div className='checkout-msg'>Your order has been placed successfully! 🎉</div>
            <Confetti
              width={width}
              height={height}
              numberOfPieces={130}
              initialVelocity={15}
            />

          </div>

        </>
      )}
      {
        !responseSummary?.msg && (


          cartData?.length === 0 ?
            <div className="shopcart-container">
              <div className="shopcart">Your cart is empty</div>
              <img className='shopcart-img' src={shopcart} alt="shopcart" />
              <br />

              <Link className='goto-productpage shop-now' to="/products"><button className='shopcart-btn'>Shop now</button></Link>
            </div>
            :
            <div className='flex cart-center'>
              <div className='horiz-card-alignment'>
                <CartItems />
              </div>


              <PriceList
                responseSummary={responseSummary}
                setResponseSummary={setResponseSummary}
              />
            </div>


        )



      }

    </div>


  )
}

export default Cart

