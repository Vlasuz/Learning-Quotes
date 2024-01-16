import React from 'react'
import { QuizTitleStyle } from './QuizTitle.styled'

export const QuizTitle = ({quizName, quizTxt}) => {
  return (
    <QuizTitleStyle className='animate__animated animate__fadeInDown'>
        <h2>
            {quizName}
        </h2>
        <p>
            {quizTxt}
        </p>
    </QuizTitleStyle>
  )
}
