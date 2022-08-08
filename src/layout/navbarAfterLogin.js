import React from 'react'
import { NavLink } from 'react-router-dom'
import newsBlogLogo from '../asset/logo.png'
import './navbar.css'

function NavbarAfterLogin() {

    return (
        <div className='container container-flex'>

            <div className='logoDiv'>
                <img src={newsBlogLogo} width='150px' height="80px" alt="logo" />
            </div>

            <div className='navDiv'>
                <nav className=''>
                    <NavLink to="/news_feed"
                        className={({ isActive }) => isActive ? "activeItem" : "nav-li-link"}>News Feed</NavLink>

                    <NavLink to="/profile"
                        className={({ isActive }) => isActive ? "activeItem" : "nav-li-link"}>Profile</NavLink>

                    <NavLink to="/logout"
                        className={({ isActive }) => isActive ? "activeItem" : "nav-li-link"} >Log out</NavLink>
                </nav>
            </div>
            <div>

            </div>

        </div>
    )
}

export default NavbarAfterLogin;