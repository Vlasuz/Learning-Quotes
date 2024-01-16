import React, { useState } from 'react'
import { HeaderStyle } from './Header.styled'
import { NavLink } from 'react-router-dom'

import headerMenu from '../../assets/img/icons/header_menu.svg'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    }
  return (
    <HeaderStyle>
        <div className='container-main animate__animated animate__fadeInDown'>
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
                    <NavLink to={'/sign-up'} href="foo">
                        Sign Up
                    </NavLink>
                    <NavLink to={'/login'} className='header__login_log'>
                        Login
                    </NavLink>
                </div>
                <div className="header__mob">
                    <img onClick={handleOpenMenu} className='header__burger' src={headerMenu} alt="menu icon" />
                    {isOpen ? (
                        <ul className="header__burger__body">
                            <li>
                                <NavLink to={'/sign-up'} href="foo">
                                    Sign Up
                                </NavLink>                            
                            </li>
                            <li>
                                <NavLink to={'/login'} className=''>
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    ) : (null)}
                </div>
            </div>
        </div>
    </HeaderStyle>
  )
}
