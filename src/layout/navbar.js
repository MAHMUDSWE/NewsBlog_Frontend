import React from 'react'
import { NavLink } from 'react-router-dom'
import newsBlogLogo from '../asset/logo.png'
import "./navbar.css"

function Navbar() {
    return (
        <div className='container container-flex'>

            <div className='logoDiv'>
            <img src={newsBlogLogo} width='150px' height="80px" alt="logo" />
            </div>

            <div className='navDiv'>
                <nav className=''>
                    <NavLink to="/"
                        className={({ isActive }) => isActive ? "activeItem" : "nav-li-link"}>Home</NavLink>

                    <NavLink to="/login"
                        className={({ isActive }) => isActive ? "activeItem" : "nav-li-link"}>Log in</NavLink>

                    <NavLink to="/signup"
                        className={({ isActive }) => isActive ? "activeItem" : "nav-li-link"} >Sign up</NavLink>
                </nav>
            </div>
            <div>

            </div>

        </div>
        
    )
}

export default Navbar