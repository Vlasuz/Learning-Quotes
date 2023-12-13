import React from 'react'
import { LoginTitleStyle } from './LoginTitle.styled'
import ArrowLeft from '../../assets/img/icons/Arrow-left.svg'

export const LoginTitle = ({arrow, title, desc}) => {
  return (
    <LoginTitleStyle>
      <div className="title__inner">
        <button className={arrow ? 'arrow' : 'no-arrow'}>
          <img src={ArrowLeft} alt="arrow icon" />
        </button>
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
