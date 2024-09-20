import React, { useContext } from 'react'
import './foodItem.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { StoreContext } from '../../context/toContext'

const FoodItem = ({ id, name, price, description, image }) => {

    const [itemCount, setItemCount] = useState(0)
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)


    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className="food-item-image" src={image} alt='image' />
                {
                    !cartItems[id] ? <img src={assets.add_icon_white} className='add' onClick={() => addToCart(id)} /> :
                        <div className='food-item-counter'>
                            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} />
                            <p>{cartItems[id]}</p>
                            <img onClick={() => addToCart(id)} src={assets.add_icon_green} />

                        </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} />
                </div>
                <p className="food-item-desc">
                    {description}
                </p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    )
}

export default FoodItem