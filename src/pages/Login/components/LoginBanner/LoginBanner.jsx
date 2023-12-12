import React from 'react'
import { LoginBannerStyle } from './LoginBanner.styled'
import Map from '../../../../assets/img/fet-map.png'

export const LoginBanner = () => {
  return (
    <LoginBannerStyle>
        <img src={Map} alt="map banner" />
    </LoginBannerStyle>
  )
}
