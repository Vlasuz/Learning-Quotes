import React from 'react'
import { LoginTitle } from '../LoginTitle/LoginTitle'
import { LoginForm } from '../LoginForm/LoginForm'
import { LoginMainStyle } from './LoginMain.styled'

export const LoginMain = () => {
  return (
    <LoginMainStyle>
        <LoginTitle/>
        <LoginForm/>
    </LoginMainStyle>
  )
}
