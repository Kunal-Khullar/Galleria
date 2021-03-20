import React, { useEffect } from 'react'
import NavbarMain from "../components/navbar/Navbar"
// import Furniture from "../components/categories/Furniture"
import Navigator from "../routes/Navigator"
const Home = () => {


    return (
        <div>
            <NavbarMain />
            <div id="#content">
                <Navigator />
            </div>
        </div>
    )
}

export default Home
