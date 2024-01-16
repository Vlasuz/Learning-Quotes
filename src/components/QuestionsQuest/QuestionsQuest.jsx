import React from 'react'
import { QuestionsQuestStyle } from './QuestionsQuest.styled'

export const QuestionsQuest = ({questionTitle, questionNum, questionTxt}) => {
  return (
    <QuestionsQuestStyle className='animate__animated animate__fadeIn'>
        <h2>
            {questionTxt} <span>{questionNum}</span>
        </h2>
        <p>
            {questionTitle}
        </p>
    </QuestionsQuestStyle>
  )
}
