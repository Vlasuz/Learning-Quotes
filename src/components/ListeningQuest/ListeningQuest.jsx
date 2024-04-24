import React, { useEffect, useState } from 'react'
import { QuizPageStyle } from '../../pages/QuizPage/QuizPage.styled'
import { BackBtn } from '../BackBtn/BackBtn'
import { QuizTitle } from '../QuizTitle/QuizTitle'
import { QuizAudio } from '../QuizAudio/QuizAudio'

import AudioImg from '../../assets/img/listening.png'
import axios from 'axios'
import getCookie from '../../functions/getCookie'
import { getApiLink } from '../../api/getApiLink'
import { setQuest } from '../../redux/toolkitSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

export const ListeningQuest = ({ onClickNext, QuestData }) => {
  const [isAudioPlayed, setIsAudioPlayed] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { levelId } = useParams();
  const questLvl = QuestData.quest_level;
  const QuestAudioFile = QuestData?.audio_file;
  const QuestStore = useSelector(state => state.toolkit.quest)


  const handleAudioEnd = () => {
    setIsAudioPlayed(true);
  };

  useEffect(() => {
    console.log(QuestStore?.id);
    if (QuestStore?.id) return;

    if (levelId === 'dlpt') {
      axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie("token")}`;
      axios.get(getApiLink("/api/quest/active_dlpt"))
        .then(({ data }) => {
          dispatch(setQuest(data));
        })
        .catch((err) => {
          console.error(err);
          toast.error(err?.response?.data?.detail);
          navigate('/map');
        })
    } else {

      axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie("token")}`;
      axios.get(getApiLink("/api/quest/active_quest"))
        .then(({ data }) => {
          dispatch(setQuest(data));
        })
        .catch((err) => {
          console.error(err);
          toast.error(err?.response?.data?.detail);
          navigate('/map');
        }) 
    }
  }, []);

  return (
    <QuizPageStyle>

        <BackBtn link={'/quiz-start'}/>

        <QuizTitle quizName={questLvl} quizTxt={'Listen this audio'} />

        <img className='audio__img animate__animated animate__fadeIn' src={AudioImg} alt="audio ph" />

        {QuestAudioFile && 
          <QuizAudio QuestData={QuestData} handleAudioEnd={handleAudioEnd}/>
        }

        <button className='audio__next animate__animated animate__fadeInUp' onClick={onClickNext} disabled={!isAudioPlayed}>
          Next
        </button>

    </QuizPageStyle>
  )
}
