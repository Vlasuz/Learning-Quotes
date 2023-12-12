import React from 'react'
import { LoginBanner } from './components/LoginBanner/LoginBanner'
import { LoginContainer } from './Login.styled'
import { LoginMain } from './components/LoginMain/LoginMain'

export const Login = () => {
  return (
    <>
      <div className="container-main-pages">
          <LoginContainer>
              <LoginBanner/>
              <LoginMain/>
          </LoginContainer>
      </div>
    </>
  )
}
