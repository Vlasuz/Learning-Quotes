import React from 'react'

import { ReadingQuestStyle } from './ReadingQuest.styled.js'
import { BackBtn } from '../BackBtn/BackBtn.jsx'
import { ReadingQuestQuestion } from '../ReadingQuestQuestion/ReadingQuestQuestion.jsx'
import { NavigationQuest } from '../NavigationQuest/NavigationQuest.jsx'

export const ReadingQuest = () => {

  return (
    <div className='container-login'>
        <ReadingQuestStyle >

            <ReadingQuestQuestion/>

            

            <NavigationQuest/>

        </ReadingQuestStyle>
    </div>
  )
}