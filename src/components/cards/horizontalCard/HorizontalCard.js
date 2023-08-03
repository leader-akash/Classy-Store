import React, {useState} from 'react'
import "./HorizontalCard.css"
import axios from 'axios'
import { useUser } from 'contexts/user-context';
import { toast } from 'react-toastify';
import { useWishlist } from 'contexts/wishlist-context';
import { useCart } from 'contexts/cart-context';


const HorizontalCard = ({ image, description, price, marketPrice, label, labelStyle, rating, _id }) => {

    const [isProductAdded, setIsProductAdded] = useState(false);
  const {addToWishlist, setAddToWishlist, wishlistData} = useWishlist();

  const {dispatch, handleRemoveCart} = useCart()


    const { getToken } = useUser();
    const product = {
        _id: _id,
        image: image,
        description: description,
        price: price,
        marketPrice: marketPrice,
        label: label,
        labelStyle: labelStyle,
        rating: rating
    }
    
    const handleMoveToWishList = () => {
    setAddToWishlist({image, description, price, marketPrice, label, labelStyle, rating, _id})
        
    }

    // const handleRemoveItem = (id) = {
    //     dispatch({type : "REMOVE_CART",  payload: id })
    //   }

    const [cartInfo, setCartInfo] = useState([])
    
    // const handleRemoveCart = (_id) => {
    //     // alert(_id)
    //     // console.log("id", id)
    //     console.log("removed item")
    //     axios.delete(`/api/user/cart/_id`,{
    //         headers: {
    //             authorization: getToken
    //         }
    //     })
    //     .then((res)=>{
    //         console.log(res, "deltedCart")
    //     })
    // }


 
    return (
        <div className="card-container-horiz">
            <div className="card-header">
                <div className="badge green card-badge-horiz label-horiz label-padding">{label}</div>
                {/* <div className="card-cancel-horiz" onClick={(e) => dispatch({type: "REMOVE_CART", payload: _id})}>X</div> */}
                <div className="card-cancel-horiz  " onClick={handleRemoveCart(_id)}>X</div>
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
                        wishlistData.findIndex((element)=> element._id === _id) !== -1 && getToken ?
                        <button className="add remove-wishlist" >Remove from Wishlist</button>
                        :
                        <button className="add " onClick={handleMoveToWishList}>Move to Wishlist</button>
                    } 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalCard