import React from 'react'
import "./ProductPage.css"
import Sidebar from '../../components/sidebar/Sidebar'

import Card from '../../components/cards/card/Card'
import { cardData } from '../../data/card.data'

const ProductPage = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <div className='flex products-container'>
        {cardData.map((el,i)=>{
          
          return (
            <Card
              image= {el.image}
              description={el.description}
              price={el.price}
              marketPrice={el.marketPrice}
              label={el.label}
              labelStyle={el.labelStyle}
              rating={el.rating}
              category={el.category}
             />
            
          )
        })}
        </div>
        
    </div>
  )
}

export default ProductPage