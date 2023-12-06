import React from 'react'
import { HeroStyle } from './Hero.styled'
import mainMap from '../../../../assets/img/map-main.jpg'

export const Hero = () => {
  return (
    <HeroStyle>
        <div className='hero'>
            <img src={mainMap} alt="main Map" />
        </div>
    </HeroStyle>
  )
}
