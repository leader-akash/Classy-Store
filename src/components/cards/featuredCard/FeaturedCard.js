import React from 'react'
import "./FeaturedCard.css";
import {Link} from "react-router-dom";

const FeaturedCard = ({image, name, cardBg}) => {
  return (
    <>
        <div className={`featured-card ${cardBg}`}>
            <img src={image} alt="img" /> 
            <div className ="items">{name}</div>
            <Link className='view-link' to="/product"><button className="view-deal">View Deals</button></Link>
        </div>
    </>
  )
}

export default FeaturedCard