import React, { useEffect, useState } from 'react'
import { FooterStyle } from './Footer.styled'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { getApiLink } from '../../api/getApiLink';

export const Footer = () => {
    const [infoData, setInfoData] = useState([]);

    useEffect(() => {
        axios.get(getApiLink('/api/info/pages/'))
            .then(({data}) => {
                console.log(data);
                setInfoData(data);
            })
    }, [])

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
                        <NavLink to={'/faq'}>
                            F.A.Q.
                        </NavLink>
                    </li>

                    {infoData.map((item) => (
                        <li key={item.slug}>
                            <NavLink to={`/info/${item.slug}`}>
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </FooterStyle>
  )
}
