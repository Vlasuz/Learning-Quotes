import React from 'react'
import { BannerStyle } from './Banner.styled'

export const Banner = () => {
  return (
    <BannerStyle>
        <div className="banner__inner">
            <h1>
                Some CTA Text Will <br />Be Here
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur. Sit risus dolor tellus tellus ipsum in.
            </p>
            <div className="banner__buttons">
                <a className='banner__buttons_log' href="foo">
                    Login
                </a>
                <a className='banner__buttons_sig' href="foo">
                    Sign Up
                </a>
            </div>
        </div>
    </BannerStyle>
  )
}
