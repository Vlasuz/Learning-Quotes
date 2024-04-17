import React from 'react'
import { QuizPageStyle } from '../../pages/QuizPage/QuizPage.styled'
import { BackBtn } from '../BackBtn/BackBtn'
import { QuizTitle } from '../QuizTitle/QuizTitle'
import { QuizAudio } from '../QuizAudio/QuizAudio'

import AudioImg from '../../assets/img/listening.png'

export const ListeningQuest = ({ onClickNext, QuestData }) => {
  return (
    <QuizPageStyle>

        <BackBtn link={'/quiz-start'}/>

        <QuizTitle quizName={'DLPT 2 +.'} quizTxt={'Listen this audio'} />

        <img className='audio__img animate__animated animate__fadeIn' src={AudioImg} alt="audio ph" />

        <QuizAudio QuestData={QuestData}/>

        <button className='audio__next animate__animated animate__fadeInUp' onClick={onClickNext}>
          Next
        </button>

    </QuizPageStyle>
  )
}
