import React from 'react'
import "./FeaturedCard.css";
import {Link} from "react-router-dom";
import { useFilter } from 'contexts/filter-context';

const FeaturedCard = ({image, name, cardBg}) => {

  const {state, dispatch} = useFilter();
  return (
    <>
        <div className={`featured-card ${cardBg}`}>
            <img src={image} alt="img" /> 
            <div className ="items">{name}</div>
            <Link className='view-link' to="/products">
            <button className="view-deal" 
              onClick={(e)=> dispatch({type: "SET_CATEGORY", payload: name.toUpperCase()})}>View Deals</button>
            
            </Link>
        </div>
    </>
  )
}

export default FeaturedCard