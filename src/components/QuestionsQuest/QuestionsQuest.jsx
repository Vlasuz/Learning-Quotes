import React from 'react'
import { QuestionsQuestStyle } from './QuestionsQuest.styled'

export const QuestionsQuest = ({questionNum, questionTxt}) => {
  return (
    <QuestionsQuestStyle>
        <h2>
            {questionNum}
        </h2>
        <p>
            {questionTxt}
        </p>
    </QuestionsQuestStyle>
  )
}
