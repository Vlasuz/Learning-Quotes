import React from 'react'
import { QuizStartStyle } from './QuizStart.styled'
import { BackBtn } from '../../components/BackBtn/BackBtn'
import { QuizTitle } from '../../components/QuizTitle/QuizTitle'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { getApiLink } from '../../api/getApiLink'
import getCookie from '../../functions/getCookie'
import Listening from '../../assets/img/listening.png'
import Book from '../../assets/img/book.png'
import { useDispatch, useSelector } from 'react-redux'
import { setQuest } from '../../redux/toolkitSlice'
import { toast } from 'react-toastify'

export const QuizStart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { levelId } = useParams();
    const encodedLevelId = encodeURIComponent(levelId);
    const QuestStore = useSelector(state => state.toolkit.quest);

    const QuestLanguage = getCookie('LangCookie')

    const handleActiveQuest = (test) => {
        if (QuestStore?.id) return;

        if (levelId === 'dlpt') {
            axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie("token")}`;
            axios.get(getApiLink("/api/quest/active_dlpt"))
                .then(({ data }) => {
                    dispatch(setQuest(data));
                    navigate(`/${test}/dlpt`)
                })
                .catch((err) => {
                    console.error(err);
                    toast.error(err?.response?.data?.detail)
                    navigate('/map');
                }) 
        } else {
            axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie("token")}`;
            axios.get(getApiLink("/api/quest/active_quest"))
                .then(({ data }) => {
                    dispatch(setQuest(data));
                    return navigate(`/${test}`)
                })
                .catch((err) => {
                    console.error(err);
                    toast.error(err?.response?.data?.detail)
                    navigate('/map');
                })
        }
    }

    const handleStartQuiz = (type, test) => {
        if (levelId === 'dlpt') {
            axios.defaults.headers.common['Authorization'] = `Bearer ${getCookie('token')}`;
            axios.post(getApiLink(`/api/quest/dlpt_start?type=${type}&language=${QuestLanguage}`))
            .then(({data}) => {
                dispatch(setQuest(data));
                navigate(`/${test}/dlpt`);
            })
            .catch((error) => {
                console.log(error);
                if (error?.response?.data?.detail === 'You already have active quest') {
                   return handleActiveQuest(test);                   
                }
                error?.response?.data?.detail && toast.error(error?.response?.data?.detail) 

            })
        } else {
            axios.defaults.headers.common['Authorization'] = `Bearer ${getCookie('token')}`;
            axios.post(getApiLink(`/api/quest/start?type=${type}&level=${encodedLevelId}&language=${QuestLanguage}`))
                .then(({data}) => {
                    dispatch(setQuest(data));
                    navigate(`/${test}`);
                })
                .catch((error) => {
                    console.log(error);
                    if (error?.response?.data?.detail === 'You already have active quest') {
                        return handleActiveQuest(test);
                    }
                    error?.response?.data?.detail && toast.error(error?.response?.data?.detail) 
    
                    
                })
        }
    }

  return (
    <div className='container-login'>
        <QuizStartStyle>

            <BackBtn link={'/map'}/>

            <QuizTitle quizName={`Quest ${levelId}`} quizTxt={'Choose type of tasks'} />

            <div className="select">
                <button onClick={e => handleStartQuiz('listening', 'listening-quest')} className='animate__animated animate__fadeInLeft'>
                    <img src={Listening} alt="Listening ph" />
                    Listening <br />Comprehension
                </button>
                <button onClick={e => handleStartQuiz('reading', 'reading-quest')} className='animate__animated animate__fadeInRight'>
                    <img src={Book} alt="Book ph" />
                    Reading <br />Comprehension
                </button>
            </div>

        </QuizStartStyle>
    </div>
  )
}
