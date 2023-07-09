import React from 'react'
import "./Sidebar.css"


const Sidebar = () => {
  return (
    <>
        <div className="sidebar-section">
            <div className="sidebar-container">
                <div className='categories'> 
                    <h3 className="cat-heading">Categories</h3>
                    <ul className="category-list">
                        <li className='cat-list-item'>
                            <label className="cat-label">
                            <input className="label-padding" type="checkbox" value="laptop" />
                            Laptops</label>
                        </li>
                        <li className='cat-list-item'>
                            <label className="cat-label">
                            <input className="label-padding" type="checkbox" value="Mobiles" />
                            Mobiles</label>
                        </li>
                        <li className='cat-list-item'>
                            <label className="cat-label">
                            <input className="label-padding" type="checkbox" value="headphone" />
                            Headphone</label>
                        </li>
                        <li className='cat-list-item'>
                            <label className="cat-label">
                            <input className="label-padding" type="checkbox" value="camera" />
                            Camera</label>
                        </li>
                        <li className='cat-list-item'>
                            <label className="cat-label">
                            <input className="label-padding" type="checkbox" value="games" />
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
                            <input id="4-star" className="label-padding" type="radio" name="rating" value="4-star" />
                            4 Star & above
                            </label>
                    </li>
                    <li className='cat-list-item'>
                            <label for="3-star" className="cat-label">
                            <input id="3-star" className="label-padding" type="radio" name="rating" value="3-star" />
                            3 Star & above</label>
                    </li>
                    <li className='cat-list-item'>
                            <label for="2-star" className="cat-label">
                            <input id="2-star" className="label-padding" type="radio" name="rating" value="2-star" />
                            2 Star & above</label>
                    </li>
                    <li className='cat-list-item'>
                            <label for="1-star" className="cat-label">
                            <input id="1-star" className="label-padding" type="radio" name="rating" value="1-star" />
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