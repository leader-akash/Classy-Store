import axios from 'axios'
import Card from 'components/cards/card/Card'
import { useFilter } from 'contexts/filter-context';
import { useProduct } from 'contexts/products-context';
import React, { useEffect, useState } from 'react'

const ProductsItems = () => {

  const [cardItem, setCardItem] = useState([]);

  const {allProducts} = useProduct();

  const {filteredData} = useFilter();

  console.log("allProducts", filteredData)

    // useEffect(()=>{

    //     axios.get("/api/products")
    //     .then((res)=>{
    //         console.log("products card", res);
    //         setCardItem(res.data.products);
    //     })

    // },[])


  return (
    <>
        {filteredData?.map((el, i) => {
          return (
            <Card
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
          );
        })}
    </>
  )
}

export default ProductsItems;