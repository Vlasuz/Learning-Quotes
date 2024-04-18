import React, { useEffect, useState } from 'react'
import { BookQuestStyle } from './BookQuest.styled'
import { QuestTxt } from '../QuestTxt/QuestTxt'
import { NavigationQuest } from '../NavigationQuest/NavigationQuest'
import { QuestionsQuest } from '../QuestionsQuest/QuestionsQuest'
import { QuestOptions } from '../QuestOptions/QuestOptions'
import { questData } from '../../assets/quiz/quiz'
import { ListeningQuestion } from '../ListeningQuestion/ListeningQuestion'
import { KeywordsQuestion } from '../KeywordsQuestion/KeywordsQuestion'
import { QuestOptionsKey } from '../QuestOptionsKey/QuestOptionsKey'
import { QuestResult } from '../QuestResult/QuestResult'
import axios from 'axios'
import { getApiLink } from '../../api/getApiLink'
import getCookie from '../../functions/getCookie'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addAnswer, setAnswer, setQuest } from '../../redux/toolkitSlice'

export const BookQuest = ({QuestData}) => {
  const [currentQuestionIn, setCurrentQuestionIn] = useState(0);
  const [questResult, setQuestResult] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [ansQuestin, setAnsQuestion] = useState([]);
  // const [answerQuestion, setAnswerQuestion] = useState([]);
  const [endedQuest, setEndedQuest] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filteredReadingQuestions = questData.filter(question => question.type !== 'book-reading');
  const currentQuestion = filteredReadingQuestions[currentQuestionIn];
  const isLastQuestion = quizData?.questions && currentQuestionIn === quizData.questions.length - 1;
  const AnswerQuestStore = useSelector((state) => state.toolkit.answerQuest);
  const QuestStore = useSelector((state) => state.toolkit.quest);



  const handleNextQuestion = () => {
    const currentAnswers = {
      id: quizData.questions[currentQuestionIn].id,
      answers_id: ansQuestin,
    };
    // setAnswerQuestion((prevAnswers) => [...prevAnswers, currentAnswers]);

    if (currentQuestionIn < quizData.questions.length - 1) {
      setCurrentQuestionIn((prevIndex) => prevIndex + 1);
    } else if (currentQuestionIn === quizData.questions.length - 1) {
      setQuestResult(true);
    }

    dispatch(addAnswer(currentAnswers));
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIn > 0) {
      setCurrentQuestionIn((prevIndex) => prevIndex - 1);
      setQuestResult(false);
    } else if (currentQuestionIn === 0) {
      navigate("/listening-quest");
    }
  };

  const handleEndQuest = () => {
    handleNextQuestion();
  };

  useEffect(() => {

    if (AnswerQuestStore?.length === quizData?.questions?.length) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie("token")}`;
  
      axios.post(getApiLink(`/api/quest/end?id=${QuestStore.id}`), AnswerQuestStore)
        .then(({ data }) => {
          console.log("endQuest", data);
          setEndedQuest(data);
        });
    } else return;

    dispatch(setAnswer([]))

  }, [AnswerQuestStore])

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie(
      "token"
    )}`;

    axios.get(getApiLink("/api/quest/active_quest")).then(({ data }) => {
      console.log(data);
      setQuizData(data);
      dispatch(setQuest(data));
    });
  }, []);

  const handleAnswer = (select) => {
    // Обробка відповідей
  }

  console.log(QuestData);

  return (
    <BookQuestStyle>
      <div className="book">
        <div className="book__lft">

          <QuestTxt
            dataItem={quizData}
            questTitle={currentQuestion.titleDesc}
            questTask={currentQuestion.description} 
          />
          

          

          {/* {currentQuestion.type === 'book-listening' && <ListeningQuestion 
              questTitle={currentQuestion.titleDesc} 
              questDesc ={currentQuestion.description} 
              audioUrls={currentQuestion.audioUrl}
            />
          }

          {currentQuestion.type === 'book-keywords' && <KeywordsQuestion 
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
            dataItem={QuestData?.questions[currentQuestionIn]}
            questionTxt={'Question'}
            
          />
          <QuestOptions currentQuestion={currentQuestion} dataItem={QuestData.questions[currentQuestionIn]} answerClick={handleAnswer} setAnsQuestion={setAnsQuestion}/>



          {/* {currentQuestion.type === 'book-listening' && <QuestOptions currentQuestion={currentQuestion} answerClick={handleAnswer}/>} */}

          {/* {currentQuestion.type === 'book-keywords' && <QuestOptionsKey
              questions={currentQuestion.questions}
            />
          } */}

        </div>
      </div>

      {questResult && <QuestResult endedQuest={endedQuest} onClose={() => setQuestResult(false)}/>}

      {/* <NavigationQuest nextPage={handleNextQuestion} prevPage={handlePrevQuestion}/> */}
      <NavigationQuest
          nextPage={handleNextQuestion}
          prevPage={handlePrevQuestion}
          isLastQuestion={isLastQuestion}
          handleEndQuest={handleEndQuest}
        />

    </BookQuestStyle>
  )
}
