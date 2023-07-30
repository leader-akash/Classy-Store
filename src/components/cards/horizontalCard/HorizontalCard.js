import React, {useState} from 'react'
import "./HorizontalCard.css"
import axios from 'axios'
import { useUser } from 'contexts/user-context';
import { toast } from 'react-toastify';


const HorizontalCard = ({ image, description, price, marketPrice, label, labelStyle, rating }) => {

    const [isProductAdded, setIsProductAdded] = useState(false);

    const { getToken } = useUser();
    const product = {
        image: image,
        description: description,
        price: price,
        marketPrice: marketPrice,
        label: label,
        labelStyle: labelStyle,
        rating: rating
    }
    
    const handleMoveToWishList = () => {
        setIsProductAdded(getToken)
        axios.post(`/api/user/wishlist`, {
            product
        },{
            headers : {
                authorization: getToken
            }
        }
        )
        .then((res)=>{
            toast.success("Added to WishList 🎉")
        })
            .catch((error) => {
                console.log("card-error", error)
            })

        }

    

    return (
        <div className="card-container-horiz">
            <div className="card-header">
                <div className="badge green card-badge-horiz label-horiz label-padding">{label}</div>
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
                    <div className="card-button-horiz move-cart">
                        {/* <div className="like"><i className="far fa-heart fa-2x"></i></div> */}
                    {
                        !isProductAdded ?
                        <button className="add " onClick={handleMoveToWishList}>Move to Wishlist</button>
                        :
                        <button className="add remove-wishlist" >Remove from Wishlist</button>
                    } 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalCard