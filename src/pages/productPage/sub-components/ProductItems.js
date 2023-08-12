import axios from 'axios'
import Card from 'components/cards/card/Card'
import { useFilter } from 'contexts/filter-context';
import { useProduct } from 'contexts/products-context';
import React, { useEffect, useState } from 'react'

const ProductsItems = () => {

  const [cardItem, setCardItem] = useState([]);

  const { filteredData } = useFilter();

  return (
    <>
      {
        filteredData?.length ?
          filteredData?.map((el, i) => {
            return (
              <Card
                key={i}
                _id={el?._id}
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
          }) :
          <div className='no__result'>
            <div className='no__result-heading'>
              Sorry, no results found!
            </div>
            <div className='no__result-desc'>
              Please check the spelling or try searching for something else
            </div>
          </div>
        }
    </>
  )
}

export default ProductsItems;