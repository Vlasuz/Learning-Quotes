import React from 'react'
import { ListeningQuestionStyle } from './ListeningQuestion.styled'
import { QuizAudio } from '../QuizAudio/QuizAudio'

import AudioImg from '../../assets/img/listening.png'

export const ListeningQuestion = () => {
  return (
    <ListeningQuestionStyle>
        <h2>
            Listening Comprehension
        </h2>
        <p>
            You can listen only 2 times
        </p>

        <QuizAudio />

        <img src={AudioImg} alt="listen ph" />

    </ListeningQuestionStyle>
  )
}
