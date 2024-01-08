import React from 'react'
import { ListeningQuestionStyle } from './ListeningQuestion.styled'
import { QuizAudio } from '../QuizAudio/QuizAudio'

import AudioImg from '../../assets/img/listening.png'

export const ListeningQuestion = ({ questTitle, questDesc, audioUrls }) => {
  return (
    <ListeningQuestionStyle>
        <h2>
          {questTitle}
        </h2>
        <p>
          {questDesc}
        </p>

        <QuizAudio audioUrls={audioUrls}/>

        <img src={AudioImg} alt="listen ph" />

    </ListeningQuestionStyle>
  )
}
