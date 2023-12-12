import React from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderLoginStyle } from './HeaderLogin.styled'
import headerMenu from '../../assets/img/icons/header_menu.svg'

export const HeaderLogin = () => {
  return (
    <div className='container-login'>
        <HeaderLoginStyle>
            <NavLink to={'/'}>
                <h2>
                    Language Quests
                </h2>
            </NavLink>
            <div className="header__login">
                <NavLink to={'/login'} className='header__login_log'>
                    Login
                </NavLink>
                <a href="foo" className='header__login_sign'>
                    Sign Up
                </a>
            </div>
            <img className='header__burger' src={headerMenu} alt="menu icon" />
        </HeaderLoginStyle>
    </div>
  )
}
