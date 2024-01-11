import React from 'react'
import { NavLink } from 'react-router-dom'

export const LoginButtons = () => {
  return (
    <div className="header__login">
        <NavLink to={'/login'} className='header__login_log'>
            Login
        </NavLink>
        <NavLink to={'/sign-up'} href="foo" className='header__login_sign'>
            Sign Up
        </NavLink>
    </div>
  )
}
