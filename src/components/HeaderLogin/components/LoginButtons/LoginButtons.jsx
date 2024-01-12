import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import headerBurger from '../../../../assets/img/icons/header_menu.svg'

export const LoginButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  } 

  return (
    <>
      <div className="header__login">
        <NavLink to={'/login'} className='header__login_log'>
            Login
        </NavLink>
        <NavLink to={'/sign-up'} href="foo" className='header__login_sign'>
            Sign Up
        </NavLink>
      </div>
      <div className='header__burger'>
        <img onClick={handleOpenMenu} src={headerBurger} alt="burger ic" />
        {isOpen ? (
          <ul>
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
    </>
  )
}
