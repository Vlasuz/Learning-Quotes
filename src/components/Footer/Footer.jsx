import React from 'react'
import { FooterStyle } from './Footer.styled'

export const Footer = () => {
  return (
    <FooterStyle>
        <div className='container'>
            <div className="footer__inner">
                <a className='footer__logo' href="foo">
                    Language Quests
                </a>
                <p>
                    © 2023  Company Name. All rights reserved.
                </p>
                <ul className='footer__list'>
                    <li>
                        <a href="foo">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="foo">
                            F.A.Q.
                        </a>
                    </li>
                    <li>
                        <a href="foo">
                            Support
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </FooterStyle>
  )
}
