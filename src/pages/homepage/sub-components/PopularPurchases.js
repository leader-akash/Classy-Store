import axios from 'axios'
import Card from 'components/cards/card/Card';
import { useProduct } from 'contexts/products-context';
import React, { useEffect, useState } from 'react'

const PopularPurchases = () => {

    const [productData, setProductData] = useState([]);
    const {allProducts} = useProduct();


   

  return (
    <>
        {allProducts?.slice(0,8).map((el, i) => {
          return (
            <Card

              image={el?.image}
              description={el?.description}
              price={el?.price}
              marketPrice={el?.marketPrice}
              label={el?.label}
              labelStyle={el?.labelStyle}
              rating={el?.rating}
              category={el?.category}

            />
          )
        })}
    </>
  )
}

export default PopularPurchases