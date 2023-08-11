import React, { useState } from 'react';
import "./PriceList.css";
import { useWishlist } from 'contexts/wishlist-context';
import { useCart } from 'contexts/cart-context';
import AddressModal from 'components/modal/AddressModal';

const PriceList = ({ responseSummary, setResponseSummary }) => {

  // const { wishlistData } = useWishlist();
  const { cartData } = useCart();

  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  }

  const closeModal = () => {
    setOpen(false);
  }

  const totalMarketPrice = cartData.reduce((acc, curr) => {
    return acc + Number(curr?.marketPrice.replaceAll("₹", "").replaceAll(",", ""))
  }, 0);

  const totalPrice = cartData.reduce((acc, curr) => {
    return acc + Number(curr?.price.replaceAll("₹", "").replaceAll(",", ""))
  }, 0)

  const totalDiscount = totalMarketPrice - totalPrice

  return (
    <>
      <div className="price-container">
        <div className='price-detail'>PRICE DETAILS</div>
        <hr />
        <div className='price-description'>

          <div className="price-info">
            <p className='p-tag'>Price </p>
            <p className='p-tag'><b>{totalMarketPrice.toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0, maximumFractionDigits: 0, })}</b></p>
          </div>
          <div className="price-info">
            <p className='p-tag'>Discount </p>
            <p className='p-tag text-red'>- {(totalDiscount).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0, maximumFractionDigits: 0, })}</p>
          </div>
          <div className="price-info">
            <p className='p-tag'>Delivery Charges </p>
            <p className='p-tag'>₹0</p>
          </div>
          <hr />
          <div className='price-info'>
            <div className='price-total font-sm'>TOTAL AMOUNT: </div>
            <p className='price-total'>{totalPrice.toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0, maximumFractionDigits: 0, })}</p></div>
          <hr />
        </div>

        <button className='paynow' onClick={openModal} >Pay now</button>
      </div>

      <AddressModal
        isOpen={isOpen}
        closeModal={closeModal}
        totalPrice={totalPrice}
        responseSummary={responseSummary}
        setResponseSummary={setResponseSummary}
      />
    </>
  )
}

export default PriceList