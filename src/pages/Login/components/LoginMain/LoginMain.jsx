import React from 'react'
import { LoginMainStyle } from './LoginMain.styled'

export const LoginMain = ({children}) => {
  return (
    <LoginMainStyle className='animate__animated animate__fadeInRight'>
      {children}
    </LoginMainStyle>
  )
}
