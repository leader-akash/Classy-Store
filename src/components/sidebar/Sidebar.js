import React, { useState } from 'react'
import "./Sidebar.css"


const Sidebar = ({filterProducts, filterRatings, categories}) => {

    // const [selectedCategories, setSelectedCateo]
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleClick = (e) => {
        const selectedCategory = e.target.value;
        const updatedCategories = [...selectedCategories];
     
        if (e.target.checked) {
          updatedCategories.push(selectedCategory);
        } else {
          const index = updatedCategories.indexOf(selectedCategory);
          if (index !== -1) {
            updatedCategories.splice(index, 1);
          }
        }
     
        setSelectedCategories(updatedCategories);
        filterProducts(updatedCategories);
    }

    //  rating 
    
    const handleRating = (e) => {
        if(e.target.checked)
        filterRatings(e.target.value);
        else {
            filterRatings("")
        }
    }

    // const handleRating = (e) => {
    //     const selectedRating = e.target.value;

    //     if(e.target.checked){
    //         filterRatings(selectedRating);
    //     }
    //     else {
    //         filterRatings("")
    //     }
    //   }

    // const handleClick = (e) => {
    //     // const category =[mobiles, laptop, headphone,camera, games]
    //     if(e.target.checked)
    //     filterProducts(e.target.value);
    //     else {
    //         filterProducts("")
    //     }

    // }

   

    
  return (
    <>
        <div className="sidebar-section">
            <div className="sidebar-container">
                <div className='categories'> 
                    <h3 className="cat-heading">Categories</h3>
                    <ul className="category-list">
                        <li className='cat-list-item'>
                            <label className="cat-label">
                            <input className="label-padding" type="checkbox" value="laptop" onClick={handleClick} />
                            Laptops</label>
                        </li>
                        <li className='cat-list-item'>
                            <label className="cat-label">
                            <input className="label-padding" type="checkbox" value="mobiles" onClick={handleClick} />
                            Mobiles</label>
                        </li>
                        <li className='cat-list-item'>
                            <label className="cat-label">
                            <input className="label-padding" type="checkbox" value="headphone" onClick={handleClick}/>
                            Headphone</label>
                        </li>
                        <li className='cat-list-item'>
                            <label className="cat-label">
                            <input className="label-padding" type="checkbox" value="camera" onClick={handleClick} />
                            Camera</label>
                        </li>
                        <li className='cat-list-item'>
                            <label className="cat-label">
                            <input className="label-padding" type="checkbox" value="games"  onClick={handleClick}/>
                            Games</label>
                        </li>
                    </ul>
                </div>

                <div className='filter'>
                    <div className='filter-heading'>
                    <h3 className="cat-heading">Filters</h3>
                    <button className="clear-filter">Clear All</button>
                    </div>

                <h4 className="filter-tag">Price Range</h4>
                <ul className="category-list">
                <li className='cat-list-item'>
                <input className="label-padding" type="range" min="0" max="100000" step="5000" volume="0" />
                </li>
                </ul>

                <h4 className="filter-tag"> Sort By</h4>

                <ul className="category-list">
                    <li className='cat-list-item'>
                            <label for="price-h" className="cat-label">
                            <input id="price-h" className="label-padding" type="radio" name="price-sort" value="price-h-l" />
                            Price - High to Low</label>
                    </li>
                    <li className='cat-list-item'>
                            <label for="price-l" className="cat-label">
                            <input id="price-l" className="label-padding" type="radio" name="price-sort" value="price-l-h" />
                            Price - Low to High</label>
                    </li>
                </ul>

                <h4 className="filter-tag">Rating</h4>

                <ul className="category-list">
                    <li className='cat-list-item'>
                    
                            <label for="4-star" className="cat-label">
                            <input id="4-star" className="label-padding" type="radio" name="rating" value="4" onClick={handleRating}/>
                            4 Star & above
                            </label>
                    </li>
                    <li className='cat-list-item'>
                            <label for="3-star" className="cat-label">
                            <input id="3-star" className="label-padding" type="radio" name="rating" value="3" onClick={handleRating}/>
                            3 Star & above</label>
                    </li>
                    <li className='cat-list-item'>
                            <label for="2-star" className="cat-label">
                            <input id="2-star" className="label-padding" type="radio" name="rating" value="2" onClick={handleRating}/>
                            2 Star & above</label>
                    </li>
                    <li className='cat-list-item'>
                            <label for="1-star" className="cat-label">
                            <input id="1-star" className="label-padding" type="radio" name="rating" value="1" onClick={handleRating}/>
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
