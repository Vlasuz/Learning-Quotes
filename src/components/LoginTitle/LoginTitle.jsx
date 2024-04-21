import React from 'react'
import { LoginTitleStyle } from './LoginTitle.styled'
import ArrowLeft from '../../assets/img/icons/Arrow-left.svg'
import { Link } from 'react-router-dom'

export const LoginTitle = ({arrow, title, desc, link}) => {
  return (
    <LoginTitleStyle>
      <div className="title__inner">
        <Link to={link} className={arrow ? 'arrow' : 'no-arrow'}>
          <img src={ArrowLeft} alt="arrow icon" />
        </Link>
        <h2>
          {title}
        </h2>
      </div>
        <p>
          {desc}
        </p>
    </LoginTitleStyle>
  )
}
