import React from 'react'
import { BannerStyle } from './Banner.styled'
import { NavLink } from 'react-router-dom'

export const Banner = () => {
  return (
    <BannerStyle>
        <div className="container-main">
            <div className="banner__inner animate__animated animate__fadeIn">
                <h1>
                    Some CTA Text Will <br />Be Here
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Sit risus dolor tellus tellus ipsum in.
                </p>
                <div className="banner__buttons">
                    <NavLink to={'/login'} className='banner__buttons_log'>
                        Login
                    </NavLink>
                    <NavLink to={'/sign-up'} className='banner__buttons_sig' href="foo">
                        Sign Up
                    </NavLink>
                </div>
            </div>
        </div>
    </BannerStyle>
  )
}
