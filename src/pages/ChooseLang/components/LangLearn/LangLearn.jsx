import React from 'react'
import { LangList } from '../LangList/LangList'
import { LangLearnContainer } from './LangLearnContainer.styled'
import { ChooseBtn } from '../ChooseBtn/ChooseBtn'
import { ChooseTitle } from '../../../../components/ChooseTitle/ChooseTitle'

export const LangLearn = () => {
  return (
    <LangLearnContainer>

      <ChooseTitle title={'Choose Language'} desc={'Which language do  you want to learn?'} />
      
      <LangList/>

      <ChooseBtn choose={'Choose'}/>

    </LangLearnContainer>
  )
}
