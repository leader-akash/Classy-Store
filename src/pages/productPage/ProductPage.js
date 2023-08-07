import React, { useEffect, useState } from 'react';
import "./ProductPage.css";
import Sidebar from '../../components/sidebar/Sidebar';
import ProductsItems from './sub-components/ProductItems';
 
const ProductPage = () => {
 
  useEffect(()=>{
    window.scrollTo({top:0, left: 0, behavior: "smooth"})
  },[])

  
 
  return (
    <>
    <div className=' flex product-section'>
    <div className='product-sidebar'>
      <Sidebar />
       </div>
      <div className='flex products-container'>
        <ProductsItems />
      </div>
      </div>
   </>
  );
};
 
export default ProductPage;
 