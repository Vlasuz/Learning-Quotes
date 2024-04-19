import React, { useState } from 'react'
import { QuizPageStyle } from '../../pages/QuizPage/QuizPage.styled'
import { BackBtn } from '../BackBtn/BackBtn'
import { QuizTitle } from '../QuizTitle/QuizTitle'
import { QuizAudio } from '../QuizAudio/QuizAudio'

import AudioImg from '../../assets/img/listening.png'

export const ListeningQuest = ({ onClickNext, QuestData }) => {
  const [isAudioPlayed, setIsAudioPlayed] = useState(false);
  const questLvl = QuestData.quest_level;

  const handleAudioEnd = () => {
    setIsAudioPlayed(true);
  };

  return (
    <QuizPageStyle>

        <BackBtn link={'/quiz-start'}/>

        <QuizTitle quizName={questLvl} quizTxt={'Listen this audio'} />

        <img className='audio__img animate__animated animate__fadeIn' src={AudioImg} alt="audio ph" />

        <QuizAudio QuestData={QuestData} handleAudioEnd={handleAudioEnd}/>

        <button className='audio__next animate__animated animate__fadeInUp' onClick={onClickNext} disabled={!isAudioPlayed}>
          Next
        </button>

    </QuizPageStyle>
  )
}
