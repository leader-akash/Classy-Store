import React from 'react';
import "./PriceList.css";

const PriceList = () => {
  return (
    <>
        <div className="price-container">
            <div className='price-detail'>PRICE DETAILS</div>
            <hr />
            <div className='price-description'>

                <div className="price-info">
                   <p className='p-tag'>Price </p>
                   <p className='p-tag'>₹0000</p>
                </div>
                <div className="price-info">
                   <p className='p-tag'>Discount </p>
                   <p className='p-tag'>₹0000</p>
                </div>
                <div className="price-info">
                   <p className='p-tag'>Delivery Charges </p>
                   <p className='p-tag'>₹0000</p>
                </div>
                <hr />
                <div className='price-info'>
                <div className='price-total'>TOTAL AMOUNT </div>
                <p className='price-total'>₹0000</p></div>
                <hr />
            </div>

            <button className='paynow'>Pay now</button>
        </div>
    </>
  )
}

export default PriceList