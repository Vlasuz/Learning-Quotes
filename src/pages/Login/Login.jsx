import React from 'react'
import { LoginBanner } from './components/LoginBanner/LoginBanner'
import { LoginContainer } from './Login.styled'
import { LoginMain } from './components/LoginMain/LoginMain'
import { LoginTitle } from './components/LoginTitle/LoginTitle'
import { LoginForm } from './components/LoginForm/LoginForm'

export const Login = () => {
  return (
    <div className="container-main-pages">
        <LoginContainer>
            <LoginBanner/>
            <LoginMain>
              <LoginTitle/>
              <LoginForm/>
            </LoginMain>
        </LoginContainer>
    </div>
  )
}
