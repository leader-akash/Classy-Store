import React, { useEffect, useState } from 'react'
import "./HorizontalCard.css"
import laptop from "../../../assets/images/apple.png"


const HorizontalCard = ({ image, description, price, marketPrice, label, labelStyle, rating }) => {


    return (
        <div className="card-container-horiz">
            <div className="card-header">
                <div className="badge green card-badge-horiz label-horiz">{label}</div>
                <div className="card-cancel-horiz">X</div>
            </div>
            <div className="card-padding">
                <div>
                    <img className="card-img-horiz horiz-img" src={image} alt="card" />
                    <br />
                    <div className='flex fix-count'>
                    <button className="dec-btn">-</button> <span className='count-item'> 1</span> <button className="inc-btn">+</button>
                    </div>
                </div>
                <div><p className="card-info-horiz">{description}</p>
                    <div className="card-price-horiz">
                        <div
                            style={{color: 'red', fontWeight: 'bold', fontSize: '16px', paddingRight: '5px',}}
                        >
                            {price}
                        </div>
                        <div style={{fontSize: '13px'}}><strike>{marketPrice}</strike></div>
                        <div className="rating">{rating}<i class="fa-solid fa-star"></i></div>
                    </div>
                    <div className="card-button-horiz">
                        <button className="add">Add to Cart</button>
                        <div className="like"><i className="far fa-heart fa-2x"></i></div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalCard