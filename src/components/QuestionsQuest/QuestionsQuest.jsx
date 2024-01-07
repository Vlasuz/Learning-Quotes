import React from 'react'
import { QuestionsQuestStyle } from './QuestionsQuest.styled'

export const QuestionsQuest = ({questionTitle, questionNum, questionTxt}) => {
  return (
    <QuestionsQuestStyle>
        <h2>
            {questionTitle} <span>{questionNum}</span>
        </h2>
        <p>
            {questionTxt}
        </p>
    </QuestionsQuestStyle>
  )
}
