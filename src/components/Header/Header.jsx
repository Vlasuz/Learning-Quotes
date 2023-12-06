import React from 'react'
import { HeaderStyle } from './Header.styled'

export const Header = () => {
  return (
    <HeaderStyle>
        <div className='container'>
            <div className="header__inner">
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
            </div>
        </div>
    </HeaderStyle>
  )
}
