import React from 'react';
import "./HomePage.css"
import tech from "../assets/images/tech.png";
import Badge from '../components/cards/badge/Badge';
import FeaturedCard from '../components/cards/featuredCard/FeaturedCard';
import { featuredCardData } from '../data/featuredCard.data';
import { badgeData } from '../data/badge.data';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';
import Card from '../components/cards/card/Card';
import { cardData } from '../data/card.data';

 const HomePage = () => {
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

              <button className="shopNow"><Link className="shop-link" to="/product">Shop now</Link></button>
              </div>

              <img src={tech}  alt="tech"/>
        </div>

        <div className="flex badgeCardCenter">
          {
            badgeData.map((el, i)=> {
              return(
                <Badge 
                icon = {el.icon}
                content = {el.content} 
                />
              )
            })
          }
        </div>

          <div className='flex features '>
          Featured Categories
          </div>

          <div className="flex featCardCenter">

            
          {
            featuredCardData.map((el, i )=>{
              console.log(el,i);
              
              return(
                <FeaturedCard

                  cardBg = {
                    i%2 === 0 ? "": "pink"
                  }
                
                 image={el.image}
                  name={el.name} />
            )
            })
          }
          
          </div>

          <div className='popular '>
          Popular Purchases
          </div>
          <div className='flex cardCenter'>
           { cardData.map((el,i) => {
              return (
                <Card 

                  image={el?.image}
                  description={el?.description}
                  price={el?.price}
                  marketPrice={el?.marketPrice}
                  label={el?.label}
                  labelStyle={el?.labelStyle}
                  rating={el?.rating}
                  category={el?.category}

                 />
              )
            })}
          </div>

          

    </>
  )
}

export default HomePage;