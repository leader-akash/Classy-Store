import React from 'react'
import "./HorizontalCard.css"
import laptop from "../../../assets/images/apple.png"

const HorizontalCard = () => {
    return (
        <div className="card-container-horiz">
            <div className="card-header">
                <div className="badge green card-badge-horiz">TRENDING</div>
                <div className="card-cancel-horiz">X</div>
            </div>
            <div className="card-padding">
                <div>
                    <img className="card-img-horiz" src={laptop} alt="card" />
                    <br />
                    <div className='flex fix-count'>
                    <button className="dec-btn">-</button> <span className='count-item'> 1</span> <button className="inc-btn">+</button>
                    </div>
                </div>
                <div><p className="card-info-horiz">ASUS ROG Strix G15 Ryzen 9 Octa Core 5900HX - 16 GB/512 GB SSD/Windows 10 Home/4 GB Graphic...</p>
                    <div className="card-price-horiz">
                        <div
                            style={{color: 'red', fontWeight: 'bold', fontSize: '16px', paddingRight: '5px',}}
                        >
                            ₹96,990
                        </div>
                        <div style={{fontSize: '13px'}}><strike>₹1,36,990</strike></div>
                        <div className="rating">4<i class="fa-solid fa-star"></i></div>
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