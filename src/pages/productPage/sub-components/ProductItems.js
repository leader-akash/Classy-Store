import axios from 'axios'
import Card from 'components/cards/card/Card'
import { useFilter } from 'contexts/filter-context';
import { useProduct } from 'contexts/products-context';
import React, { useEffect, useState } from 'react'

const ProductsItems = () => {

  const [cardItem, setCardItem] = useState([]);

  const {allProducts} = useProduct();

  const {filteredData} = useFilter();

  console.log("filteredCategoryData", filteredData);



  return (
    <>
        {filteredData?.map((el, i) => {
          return (
            <Card
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
          );
        })}
    </>
  )
}

export default ProductsItems;