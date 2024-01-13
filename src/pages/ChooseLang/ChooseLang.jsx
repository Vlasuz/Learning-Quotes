import React from 'react'
import { LoginContainer } from '../Login/Login.styled'
import { LangSwiper } from './components/LangSwiper/LangSwiper'
import { LangLearn } from './components/LangLearn/LangLearn'

export const ChooseLang = () => {

  return (
    <div className="container-main-pages">
      <LoginContainer>

        <LangSwiper/>

        <LangLearn/>

      </LoginContainer>
    </div>
  )
}
