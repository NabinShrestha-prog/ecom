import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom'

import { useAuth0 } from "@auth0/auth0-react";




import './nav.css'

const Nav = () => {
    const { loginWithRedirect, logout, user, isAuthenticated, } = useAuth0();
    return (
        <div className='header'>
            <div className='top_header'>
                <div className='icon'>
                    <MdLocalShipping />
                </div>
                <div className='info'>
                    <p>
                        Free Shipping when shopping upto $1000
                    </p>
                </div>
            </div>
            <div className="mid_header">
                <div className="logo">
                    <img src="image/logo.webp" alt="logo" />
                </div>
                <div className="search_box">
                    <input type="text" value='' placeholder='search' />
                    <button><FaSearch /></button>
                </div>
                {
                    isAuthenticated ?
                        //if user is logged in then Logout button will be displayed
                        <div className="user">
                            <div className="icon">
                                <MdLogout />
                            </div>
                            <div className="btn">
                                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Loginout</button>
                            </div>
                        </div>
                        :
                        //if user is logged out  in then Login  button will be displayed
                        <div className="user">
                            <div className="icon">
                                <MdLogin />
                            </div>
                            <div className="btn">
                                <button onClick={() => loginWithRedirect()}>Login</button>
                            </div>
                        </div>
                }
            </div>
            <div className="last_header">
                <div className="user_profile">
                    {
                        //display user profile here
                        isAuthenticated ?
                            <>
                                <div className="icon">
                                    <CiUser />
                                </div>
                                <div className="info">
                                    <h2>{user.name}</h2>
                                    <p>{user.email}</p>
                                </div>

                            </>
                            :
                            <>
                                <div className="icon">
                                    <CiUser />
                                </div>
                                <div className="info">
                                    <p>
                                        Please login
                                    </p>
                                </div>
                            </>
                    }
                </div>
                <div className="nav">
                    <ul>
                        <li> <Link to='/' className='link'>Home</Link></li>
                        <li> <Link to='/shop' className='link'>Shop</Link></li>
                        <li> <Link to='/collection' className='link'>Collection</Link></li>
                        <li> <Link to='/about' className='link'>About</Link></li>
                        <li> <Link to='/contact' className='link'>Contact</Link></li>
                    </ul>
                </div>
                <div className="offer">
                    <p>Flat 10% over all iphones</p>
                </div>
            </div>
        </div>
    )
}

export default Nav