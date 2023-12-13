import React from 'react'
import { LoginMainStyle } from './LoginMain.styled'

export const LoginMain = ({children}) => {
  return (
    <LoginMainStyle>
        {children}
    </LoginMainStyle>
  )
}
