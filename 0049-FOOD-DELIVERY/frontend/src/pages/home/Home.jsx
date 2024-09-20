import React, { useState } from 'react'
import './home.css'
import Header from '../../components/header/Header.jsx'
import ExploreMenu from '../../components/exploreMenu/ExploreMenu.jsx'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay.jsx'
import AppDownload from '../../components/appDownload/AppDownload.jsx'
const Home = () => {
    const [category, setCategory] = useState('All')

    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />
            <AppDownload />
        </div>
    )
}

export default Home