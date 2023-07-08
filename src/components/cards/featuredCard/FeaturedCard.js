import React from 'react'
import "./FeaturedCard.css";
import {Link} from "react-router-dom";

const FeaturedCard = ({image, name, cardBg}) => {
  return (
    <>
        <div className={`featured-card ${cardBg}`}>
            <img src={image} alt="img" /> 
            <div className ="items">{name}</div>
            <button className="view-deal"><Link className='view-link' to="/product">View Deals</Link></button>
        </div>
    </>
  )
}

export default FeaturedCard