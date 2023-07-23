import axios from 'axios'
import FeaturedCard from 'components/cards/featuredCard/FeaturedCard'
import { featuredCardData } from 'data/featuredCard.data'
import React, { useEffect, useState } from 'react'

const FeaturedCategories = () => {

  const [featuredData, setFeaturedData]= useState([]);

  useEffect(() =>{
    axios.get("/api/categories")
    .then((res)=>{
      console.log('ytyr7tt', res);
      setFeaturedData(res.data.categories);
    })
  }, []  )
console.log("featuredData", featuredData);
  return (
    <>
    {featuredData.map((el, i) => {
        console.log(el, i);
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