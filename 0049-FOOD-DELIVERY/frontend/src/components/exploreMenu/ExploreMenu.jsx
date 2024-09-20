import React from 'react'
import './exploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your craving and elevate your dining experience.</p>
            <div className='explore-menu-list'>
                {menu_list.map((item, index) => {
                    return (
                        <div key={index} className='explore-menu-list-item' onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)}>
                            <img src={item.menu_image} className={category === item.menu_name ? 'active' : ""} />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu