import React from 'react'
import { QuestionsQuestStyle } from './QuestionsQuest.styled'

export const QuestionsQuest = ({ questionTxt, dataItem}) => {

  console.log(dataItem);
  return (
    <QuestionsQuestStyle className='animate__animated animate__fadeIn'>
        <h2>
            {questionTxt}
        </h2>
        <p>
            {dataItem?.question}
        </p>
    </QuestionsQuestStyle>
  )
}
