import React from 'react'
import { HeaderLogin } from '../../components/HeaderLogin/HeaderLogin'
import { LoginBanner } from './components/LoginBanner/LoginBanner'
import { LoginContainer } from './Login.styled'
import { LoginMain } from './components/LoginMain/LoginMain'

export const Login = () => {
  return (
    <>
        <HeaderLogin />

        <div className="container-main-pages">
            <LoginContainer>
                <LoginBanner/>
                <LoginMain/>
            </LoginContainer>
        </div>
    </>
  )
}
