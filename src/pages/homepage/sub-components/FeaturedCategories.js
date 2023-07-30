import axios from 'axios'
import FeaturedCard from 'components/cards/featuredCard/FeaturedCard'
import { featuredCardData } from 'data/featuredCard.data'
import React, { useEffect, useState } from 'react'

const FeaturedCategories = () => {

  const [featuredData, setFeaturedData]= useState([]);

  useEffect(() =>{
    axios.get("/api/categories")
    .then((res)=>{
    
      setFeaturedData(res.data.categories);
    })
  }, []  )
  return (
    <>
    {featuredData.map((el, i) => {
      return (
      <FeaturedCard
        cardBg={
          i % 2 === 0 ? "" : "pink"
        }
        image={el.image}
        name={el.categoryName} />
      )
      })}
    </>
  )
}

export default FeaturedCategories