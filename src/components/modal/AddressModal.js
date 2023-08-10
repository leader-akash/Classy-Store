import React, { useEffect, useState } from 'react'

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./AddressModal.css"
import { toast } from 'react-toastify';
import { useCart } from 'contexts/cart-context';


const AddressModal = ({ isOpen, closeModal, totalPrice, responseSummary, setResponseSummary }) => {

  const [address, setAddress] = useState("");

  const { cartData, handleRemoveCart } = useCart();

  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("userInfo")))
  }, [])


  const clearCart = () => {
    cartData.forEach((el) => {
      handleRemoveCart(el._id)
    })
  }

  const razorpayHandler = () => {
    address?.length ? displayRazorpay() : toast.error("Please select address")
  }

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      }

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    })
  }
  const displayRazorpay = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      toast.error("Razorpay SDK failed to load, check your connection")

      return;
    }

    const options = {
      key: "rzp_test_zgihpQdmCc9n46",
      amount: totalPrice * 100,
      currecy: "INR",
      name: "Classy Store",
      description: "Thankyou for shopping with us",
      // image: "",
      handler: function (response) {
        setResponseSummary({
          msg: true,
          cart: cartData,
          id: response.razorpay_payment_id
        })
        clearCart()
      },
      prefill: {
        name: currentUser?.firstName,
        email: currentUser?.email,
        contact: "8795486212"
      },
      theme: {
        color: "#2e8be6",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }


  return (
    <Modal open={isOpen} onClose={closeModal} center>
      <div className='address-container'>
        <div className='select-address'>Select Address</div>
        {/* <div className='address-bar'> */}
        <label for="address-one" className='choose-address'>
          <input className='address-input' id="address-one" name="address" type="radio" value={address} onChange={() => setAddress('addr1')}
            checked={address === 'addr1'}
          />
          <span className='address-name'>Akash, </span>
          Edge colony, Chandigarh, Punjab, 1601
        </label>
        {/* </div> */}
        {/* <div className='address-bar'> */}
        <label for="address-two" className='choose-address'>
          <input className='address-input' id="address-two" name="address" type="radio" value={address} onChange={() => setAddress('addr2')}
            checked={address === 'addr2'}

          />
          <span className='address-name'>Vishal kumar, </span>
          Perfect view, Banglore, India, 13512
        </label>
        {/* </div> */}
        <div className='place-btn'>
          <button className='place-order' onClick={razorpayHandler}>Place Order</button>
        </div>
      </div>
    </Modal>
  )
}

export default AddressModal