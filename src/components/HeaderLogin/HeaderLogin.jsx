import React from 'react'
import { NavLink } from 'react-router-dom'
import headerMenu from '../../assets/img/icons/header_menu.svg'

export const HeaderLogin = () => {
  return (
    <div className='container-main'>
        <div className="header">
            <NavLink to={'/'}>
                <h2>
                    Learning Quotes
                </h2>
            </NavLink>
            <div className="header__review">
                <a href="foo">
                    Features
                </a>
                <a href="foo">
                    Reviews
                </a>
            </div>
            <div className="header__login">
                <a href="foo">
                    Sign Up
                </a>
                <NavLink to={'/login'} className='header__login_log'>
                    Login
                </NavLink>
            </div>
            <img className='header__burger' src={headerMenu} alt="menu icon" />
        </div>
    </div>
  )
}
