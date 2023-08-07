import React, { useState } from 'react';
import "./PriceList.css";
import { useWishlist } from 'contexts/wishlist-context';
import { useCart } from 'contexts/cart-context';
import AddressModal from 'components/modal/AddressModal';

const PriceList = () => {

  // const { wishlistData } = useWishlist();
  const { cartData } = useCart();
  
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  }

  const closeModal = () => {
    setOpen(false);
  }

  const tp = cartData[0]?.price;

  console.log(cartData[0]?.price, "price")
 
  console.log(Array.isArray(cartData))

  const arr = [1, 2, 3, 4, 5];

  const sum = 10;

  // const sumofall = arr.reduce((acc, curr)=> (acc+curr),sum)
 

  console.log(arr[1], "arr")

  const arr1 = [{
    name: 'ram',
    age: 25
  },
  {
    name: 'rahul',
    age: 20
  },
  {
    name: 'jatin',
    age: 45
  }]

  const mp = cartData[0].marketPrice;

  const num = tp.replaceAll("₹", "").replaceAll(",", "")
  const num2 = mp.replaceAll("₹", "").replaceAll(",", "")



  // console.log(num,num2, " number", "ans", (Number(num2)- Number(num)).toLocaleString())
  console.log(num, num2, " number", "ans", (1000000).toLocaleString("en-IN", { style: "currency", currency: "INR" }))

  const totalMarketPrice = cartData.reduce((acc, curr)=> {
    console.log(curr?.marketPrice.replaceAll("₹", "").replaceAll(",", ""), "curr")
    return acc+Number(curr?.marketPrice.replaceAll("₹", "").replaceAll(",", ""))
  },0);

  

  const totalPrice = cartData.reduce((acc, curr)=>{
    return acc+Number(curr?.price.replaceAll("₹", "").replaceAll(",", ""))
  },0)

  const totalDiscount = totalMarketPrice - totalPrice

  console.log(totalMarketPrice, "sum")

  console.log("arr1", arr1[0].age);
  console.log("mp", cartData[0].price)

  return (
    <>
      <div className="price-container">
        <div className='price-detail'>PRICE DETAILS</div>
        <hr />
        <div className='price-description'>

          <div className="price-info">
            <p className='p-tag'>Price </p>
            <p className='p-tag'><b>{totalMarketPrice.toLocaleString("en-IN", {style: "currency", currency: "INR", minimumFractionDigits: 0, maximumFractionDigits: 0,})}</b></p>
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
            <div className='price-total font-sm'>TOTAL AMOUNT </div>
            <p className='price-total'>{totalPrice.toLocaleString("en-IN", {style: "currency", currency: "INR", minimumFractionDigits: 0, maximumFractionDigits: 0,})}</p></div>
          <hr />
        </div>

        <button className='paynow' onClick={openModal} >Pay now</button>
      </div>

      <AddressModal
          isOpen = {isOpen}
          closeModal={ closeModal}
       />
    </>
  )
}

export default PriceList