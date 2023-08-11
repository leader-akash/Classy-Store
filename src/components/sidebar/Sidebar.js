import React, { useState } from 'react'
import "./Sidebar.css"
import { useFilter } from 'contexts/filter-context';
import { HIGH_TO_LOW, LOW_TO_HIGH } from 'utils/constants/constants';


const Sidebar = () => {

  const { state: { showCategory, sortByPrice, sortByPriceRange, sortByRating }, dispatch } = useFilter();

  const handleCategory = (e) => {

    const checked = e.target.checked;
    const categoryType = e.target.value;

    if (checked) {
      return {
        type: "SET_CATEGORY", payload: categoryType?.toUpperCase()
      }
    }
    else {
      return {
        type: "UNSET_CATEGORY", payload: categoryType?.toUpperCase()
      }
    }
  }

  return (
    <>
      <div className="sidebar-section">
        <div className="sidebar-container">
          <div className='categories'>
            <h3 className="cat-heading">Categories</h3>
            <ul className="category-list">
              <li className='cat-list-item'>
                <label className="cat-label">
                  <input className="label-padding" type="checkbox" value="laptops" onChange={(e) => dispatch(handleCategory(e))}
                    checked={showCategory.includes("LAPTOPS")}
                  />
                  Laptops</label>
              </li>
              <li className='cat-list-item'>
                <label className="cat-label">
                  <input className="label-padding" type="checkbox" value="mobiles" onChange={(e) => dispatch(handleCategory(e))}
                    checked={showCategory.includes("MOBILES")} />
                  Mobiles</label>
              </li>
              <li className='cat-list-item'>
                <label className="cat-label">
                  <input className="label-padding" type="checkbox" value="headphones" onChange={(e) => dispatch(handleCategory(e))}
                    checked={showCategory.includes("HEADPHONES")} />
                  Headphones</label>
              </li>
              <li className='cat-list-item'>
                <label className="cat-label">
                  <input className="label-padding" type="checkbox" value="camera" onChange={(e) => dispatch(handleCategory(e))}
                    checked={showCategory.includes("CAMERA")} />
                  Camera</label>
              </li>
              <li className='cat-list-item'>
                <label className="cat-label">
                  <input className="label-padding" type="checkbox" value="games" onChange={(e) => dispatch(handleCategory(e))}
                    checked={showCategory.includes("GAMES")} />
                  Games</label>
              </li>
            </ul>
          </div>

          <div className='filter'>
            <div className='filter-heading'>
              <h3 className="cat-heading">Filters</h3>
              <button className="clear-filter" 
              onClick={()=> dispatch({type: "RESET_FILTER" })}
              >Clear filters</button>
            </div>

            {/* price Range */}
            <h4 className="filter-tag">Price Range</h4>
            <ul className="category-list">
            <li><span>all</span> <span>{sortByPriceRange > 0 && ` < ₹${sortByPriceRange}`}</span></li>
              <li className='cat-list-item'>
                <input className="label-padding sel-range" type="range" min="0" max="100000" step="5000" value={sortByPriceRange}
                  onChange={(e) => dispatch({ type: "RANGE", payload: e.target.value })}
                />
              </li>
            </ul>

            {/* sort by price */}

            <h4 className="filter-tag"> Sort By</h4>

            <ul className="category-list">
              <li className='cat-list-item'>
                <label for="price-h" className="cat-label">
                  <input id="price-h" className="label-padding" type="radio" name="price-sort" value={HIGH_TO_LOW} onChange={() => dispatch({ type: "PRICE_SORT", payload: HIGH_TO_LOW })}
                    checked={sortByPrice && sortByPrice === HIGH_TO_LOW}
                  />
                  Price - High to Low</label>
              </li>
              <li className='cat-list-item'>
                <label for="price-l" className="cat-label">
                  <input id="price-l" className="label-padding" type="radio" name="price-sort" value={LOW_TO_HIGH} onChange={(e) => dispatch({ type: "PRICE_SORT", payload: LOW_TO_HIGH })}
                    checked={sortByPrice && sortByPrice === LOW_TO_HIGH}
                  />
                  Price - Low to High</label>
              </li>
            </ul>

            {/* sort by rating */}

            <h4 className="filter-tag">Rating</h4>

            <ul className="category-list">
              <li className='cat-list-item'>

                <label for="4-star" className="cat-label">
                  <input id="4-star" className="label-padding" type="radio" name="rating" value="4" 
                  onClick={(e)=> dispatch({type: "RATING", payload: 4})}
                  checked={sortByRating && sortByRating === 4}
                  
                   />
                  4 Star & above
                </label>
              </li>
              <li className='cat-list-item'>
                <label for="3-star" className="cat-label">
                  <input id="3-star" className="label-padding" type="radio" name="rating" value="3" 
                  onClick={(e)=> dispatch({type: "RATING", payload: 3})}
                  checked={sortByRating && sortByRating === 3} />
                  3 Star & above</label>
              </li>
              <li className='cat-list-item'>
                <label for="2-star" className="cat-label">
                  <input id="2-star" className="label-padding" type="radio" name="rating" value="2" 
                  onClick={(e)=> dispatch({type: "RATING", payload: 2})}
                  checked={sortByRating && sortByRating === 2} />
                  2 Star & above</label>
              </li>
              <li className='cat-list-item'>
                <label for="1-star" className="cat-label">
                  <input id="1-star" className="label-padding" type="radio" name="rating" value="1"
                 onClick={(e)=> dispatch({type: "RATING", payload: 1})}
                 checked={sortByRating && sortByRating === 1} />
                  1 Star & above</label>
              </li>
            </ul>

          </div>


        </div>
      </div>
    </>

  )
}


export default Sidebar;
