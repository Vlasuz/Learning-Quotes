import React from 'react'
import { LoginTitle } from '../../../../components/LoginTitle/LoginTitle'
import { LangList } from '../LangList/LangList'
import { LangLearnContainer } from './LangLearnContainer.styled'

export const LangLearn = () => {
  return (
    <LangLearnContainer>

      <LoginTitle title={'Choose Language'} desc={'Which language do  you want to learn?'} />
      
      <LangList/>

      

    </LangLearnContainer>
  )
}
