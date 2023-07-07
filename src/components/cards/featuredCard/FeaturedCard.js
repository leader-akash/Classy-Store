import React from 'react'
import "./FeaturedCard.css";
import headphones from "../../../assets/images/headphone.png"

const FeaturedCard = ({image, name, cardBg}) => {
  return (
    <>
        <div className={`featured-card ${cardBg}`}>
            <img src={image} alt="img" /> 
            <div className ="items">{name}</div>
            <button className="view-deal">View Deals</button>
        </div>
    </>
  )
}

export default FeaturedCard