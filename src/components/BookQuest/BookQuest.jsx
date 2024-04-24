import React, { useEffect, useState } from 'react'
import { BookQuestStyle } from './BookQuest.styled'
import { QuestTxt } from '../QuestTxt/QuestTxt'
import { NavigationQuest } from '../NavigationQuest/NavigationQuest'
import { QuestionsQuest } from '../QuestionsQuest/QuestionsQuest'
import { QuestOptions } from '../QuestOptions/QuestOptions'
import { questData } from '../../assets/quiz/quiz'
import { ListeningQuestion } from '../ListeningQuestion/ListeningQuestion'
import { QuestResult } from '../QuestResult/QuestResult'
import axios from 'axios'
import { getApiLink } from '../../api/getApiLink'
import getCookie from '../../functions/getCookie'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addAnswer } from '../../redux/toolkitSlice'
import { toast } from 'react-toastify'

export const BookQuest = ({QuestData}) => {
  const [currentQuestionIn, setCurrentQuestionIn] = useState(0);
  const [questResult, setQuestResult] = useState(false);
  // const [quizData, setQuizData] = useState([]);
  const [ansQuestin, setAnsQuestion] = useState([]);
  const [endedQuest, setEndedQuest] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const QuestStore = useSelector((state) => state.toolkit.quest);
  const AnswerQuestStore = useSelector((state) => state.toolkit.answerQuest);

  //del 2
  const filteredReadingQuestions = questData.filter(question => question.type !== 'book-reading');
  const currentQuestion = filteredReadingQuestions[currentQuestionIn];

  const isLastQuestion = QuestStore?.questions && currentQuestionIn === QuestStore?.questions?.length - 1;
  const numQuest = currentQuestionIn + 1

  const handleNextQuestion = () => {
    const currentAnswers = {
      id: QuestStore?.questions[currentQuestionIn]?.id,
      answers_id: ansQuestin,
    };

    if (currentQuestionIn < QuestStore?.questions?.length - 1) {
      setCurrentQuestionIn((prevIndex) => prevIndex + 1);
    } else if (currentQuestionIn === QuestStore?.questions?.length - 1) {
      setQuestResult(true);
    }

    dispatch(addAnswer(currentAnswers));
  };

  const handleEndQuest = () => {
    handleNextQuestion();
  };


  useEffect(() => {

    if (AnswerQuestStore?.length === QuestStore?.questions?.length) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie("token")}`;
  
      axios.post(getApiLink(`/api/quest/end?id=${QuestStore?.id}`), AnswerQuestStore)
        .then(({ data }) => {
          setEndedQuest(data);
        })
        .catch((err) => {
          console.error(err);
          toast.error(err?.response?.data?.detail)
          navigate('/map');
        }) 
    } else return;

    // dispatch(setAnswer([]))

  }, [AnswerQuestStore])

  useEffect(() => {
    // axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie(
    //   "token"
    // )}`;

    // axios.get(getApiLink("/api/quest/active_quest"))
    //   .then(({ data }) => {
    //     setQuizData(data);
    //     dispatch(setQuest(data));
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     toast.error(err?.response?.data?.detail)
    //     navigate('/map');
    //   });
  }, []);

  const questStoreAudio = QuestStore?.questions[currentQuestionIn]?.audio_file
  const questStoreItem = QuestStore?.questions[currentQuestionIn]

  console.log(questStoreItem);
  

  return (
    <BookQuestStyle>
      <div className="book">
        <div className="book__lft">

          {questStoreAudio ? (
            <ListeningQuestion 
              questStoreItem={questStoreItem}
              questTitle={currentQuestion.titleDesc} 
              questDesc ={currentQuestion.description} 
              audioUrls={currentQuestion.audioUrl}
            />
          ) : (

            <QuestTxt
              dataItem={QuestStore}
              questTitle={currentQuestion.titleDesc}
              questTask={currentQuestion.description} 
            />                    
          )}

          {/* {currentQuestion.type === 'book-keywords' && <KeywordsQuestion 
              questTitle={currentQuestion.titleDesc}
              questWords={currentQuestion.words}
            />
          } */}

        </div>

        <div className="book__rht">

          {/* {currentQuestion.type === 'book-listening' && <QuestionsQuest
              key={currentQuestion.id}
              questionTxt={'Question'}
              questionNum={currentQuestion.questionNum}
              questionTitle={currentQuestion.question}
            />
          } */}

          <QuestionsQuest
            dataItem={questStoreItem}
            questionTxt={`Question №${numQuest}`}
            
          />
          <QuestOptions currentQuestion={currentQuestion} dataItem={QuestData.questions[currentQuestionIn]} setAnsQuestion={setAnsQuestion}/>



          {/* {currentQuestion.type === 'book-listening' && <QuestOptions currentQuestion={currentQuestion} answerClick={handleAnswer}/>} */}

          {/* {currentQuestion.type === 'book-keywords' && <QuestOptionsKey
              questions={currentQuestion.questions}
            />
          } */}

        </div>
      </div>

      {questResult && <QuestResult endedQuest={endedQuest} onClose={() => setQuestResult(false)}/>}

      <NavigationQuest
        nextPage={handleNextQuestion}
        // prevPage={handlePrevQuestion}
        isLastQuestion={isLastQuestion}
        handleEndQuest={handleEndQuest}
      />

    </BookQuestStyle>
  )
}
