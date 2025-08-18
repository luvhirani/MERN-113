import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { Link, NavLink } from 'react-router-dom'
import "./Home.css"

const Home = () => {

  return (
    <div>Home Page
        {/* <a href="/profile"> Profile</a> */}
        <br />
        <Link to='/profile'>Profile</Link>
        <br />
        <NavLink to="/profile"
        style={({isActive})=>({
          color: isActive ? "active-link" : "inactive-link"
        })}>
          Profile
        </NavLink>
        {/* <Navbar/>
        <Sidebar/>
        <Footer/> */}
    </div>
  )
}

export default Home