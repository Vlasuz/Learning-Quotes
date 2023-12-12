import React from 'react'
import { LoginTitleStyle } from './LoginTitle.styled'

export const LoginTitle = () => {
  return (
    <LoginTitleStyle>
        <h2>
            Log in Now
        </h2>
        <p>
            Please enter your information below in order to login to your account.
        </p>
    </LoginTitleStyle>
  )
}
