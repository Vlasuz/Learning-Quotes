import React from 'react'
import { QuizPageStyle } from './QuizPage.styled'
import { BackBtn } from '../../components/BackBtn/BackBtn'
import { QuizTitle } from '../../components/QuizTitle/QuizTitle'

import AudioImg from '../../assets/img/listening.png'

export const QuizPage = () => {
  return (
    <div className='container-login'>
        <QuizPageStyle>

            <BackBtn link={'/some'}/>

            <QuizTitle quizName={'DLPT 2 +.'} quizTxt={'Listen this audio'} />

            <img className='audio__img' src={AudioImg} alt="audio ph" />

        </QuizPageStyle>
    </div>
  )
}
