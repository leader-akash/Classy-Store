import React, { useEffect } from 'react';
import "./HomePage.css"
import tech from "assets/images/tech.png";
import Badge from 'components/cards/badge/Badge';
import FeaturedCard from 'components/cards/featuredCard/FeaturedCard';
import { featuredCardData } from '../../data/featuredCard.data';
import { badgeData } from '../../data/badge.data';
import { Link } from 'react-router-dom';
import Card from '../../components/cards/card/Card';
import { cardData } from '../../data/card.data';
import FeaturedCategories from './sub-components/FeaturedCategories';
import PopularPurchases from './sub-components/PopularPurchases';

const HomePage = () => {

  useEffect(()=>{
    window.scrollTo({top:0, left: 0, behavior: "smooth"})
  },[])

  return (
    <>
      <div className="banner">
        <div className="banner-container">
          <div className="techInfo">
            New Gadgets
            <br />
            Big discount
          </div>
          <p className="discount">Save 50% on your first purchase</p>

          <Link className="shop-link" to="/products"><button className="shopNow">Shop now</button></Link>
        </div>

        <img src={tech} alt="tech" />
      </div>

      <div className="flex badgeCardCenter">
        {
          badgeData.map((el, i) => {
            return (
              <Badge
                icon={el.icon}
                content={el.content}
              />
            )
          })
        }
      </div>

      <div className='flex features '>
        Featured Categories
      </div>

      <div className="flex featCardCenter">
        <FeaturedCategories />
      </div>

      <div className='popular '>
        Popular Purchases
      </div>
      <div className='flex cardCenter'>
        <PopularPurchases />
      </div>



    </>
  )
}

export default HomePage;