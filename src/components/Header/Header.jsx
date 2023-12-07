import React from 'react'
import { HeaderStyle } from './Header.styled'
import headerMenu from '../../assets/img/icons/header_menu.svg'

export const Header = () => {
  return (
    <HeaderStyle>
        <div className='container-main'>
            <div className="header">
                <a href='foo'>
                    <h2>
                        Learning Quotes
                    </h2>
                </a>
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
                    <a className='header__login_log' href="foo">
                        Login
                    </a>
                </div>
                <img className='header__burger' src={headerMenu} alt="menu icon" />
            </div>
        </div>
    </HeaderStyle>
  )
}
