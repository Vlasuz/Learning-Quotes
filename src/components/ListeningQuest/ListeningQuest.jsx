import React from 'react'
import { QuizPageStyle } from '../../pages/QuizPage/QuizPage.styled'
import { BackBtn } from '../BackBtn/BackBtn'
import { QuizTitle } from '../QuizTitle/QuizTitle'
import { QuizAudio } from '../QuizAudio/QuizAudio'

import AudioImg from '../../assets/img/listening.png'

export const ListeningQuest = ({ onClickNext }) => {
  return (
    <QuizPageStyle>

        <BackBtn link={'/quiz-start'}/>

        <QuizTitle quizName={'DLPT 2 +.'} quizTxt={'Listen this audio'} />

        <img className='audio__img' src={AudioImg} alt="audio ph" />

        <QuizAudio />

        <button className='audio__next' onClick={onClickNext}>
          Next
        </button>

    </QuizPageStyle>
  )
}
