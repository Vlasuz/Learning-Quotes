import React from 'react'
import { HeroStyle } from './Hero.styled'
import mainMap from '../../../../assets/img/map-main.jpg'

export const Hero = () => {
  return (
    <HeroStyle>
      <div className="container animate__animated animate__fadeIn animate__delay-1s">
        <div className='hero'>
          <img src={mainMap} alt="main Map" />
        </div>
      </div>
    </HeroStyle>
  )
}
