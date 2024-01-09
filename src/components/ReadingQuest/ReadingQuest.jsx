import React from 'react'

import { ReadingQuestStyle } from './ReadingQuest.styled.js'
import { BackBtn } from '../BackBtn/BackBtn.jsx'
import { ReadingQuestQuestion } from '../ReadingQuestQuestion/ReadingQuestQuestion.jsx'

export const ReadingQuest = () => {

  return (
    <div className='container-login'>
        <ReadingQuestStyle >
            <BackBtn link={'/quiz-start'}/>

            <ReadingQuestQuestion/>

        </ReadingQuestStyle>
    </div>
  )
}