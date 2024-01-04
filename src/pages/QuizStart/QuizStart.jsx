import React from 'react'
import { QuizStartStyle } from './QuizStart.styled'
import { BackBtn } from '../../components/BackBtn/BackBtn'
import { QuizTitle } from '../../components/QuizTitle/QuizTitle'

export const QuizStart = () => {
  return (
    <div className='container-login'>
        <QuizStartStyle>

            <BackBtn link={'/some'}/>

            <QuizTitle quizName={'DLPT 2 +'} quizTxt={'Choose type of tasks'} />
            
        </QuizStartStyle>
    </div>
  )
}
