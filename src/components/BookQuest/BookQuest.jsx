import React, { useEffect, useState } from 'react'
import { BookQuestStyle } from './BookQuest.styled'
import { QuestTxt } from '../QuestTxt/QuestTxt'
import { NavigationQuest } from '../NavigationQuest/NavigationQuest'
import { QuestionsQuest } from '../QuestionsQuest/QuestionsQuest'
import { QuestOptions } from '../QuestOptions/QuestOptions'
import { questData } from '../../assets/quiz/quiz'

export const BookQuest = () => {
  const [currentQuestionIn, setCurrentQuestionIn] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const currentQuestion = questData[currentQuestionIn];

  const handleNextQuestion = () => {
    if (currentQuestionIn < questData.length -1) {
      setCurrentQuestionIn((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    setUserAnswers(false);
  }, [currentQuestionIn])

  const handlePrevQuestion = () => {
    if (currentQuestionIn > 0 ) {
      setCurrentQuestionIn((prevIndex) => prevIndex - 1);
    }
  };

  const handleAnswer = (selected) => {
    const isCorrect = selected === currentQuestion.correctAnswer;

    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIn] : {answer: selected, isCorrect}
    }))
  } 



  return (
    <BookQuestStyle>
        <div className="book">
            <div className="book__lft">

              <QuestTxt 
                questTitle={currentQuestion.titleDesc} 
                questTask={currentQuestion.description} 
              />
            </div>

            <div className="book__rht">

              <QuestionsQuest 
                key={currentQuestion.id}
                questionTxt={'Question'}
                questionNum={currentQuestion.questionNum}
                questionTitle={currentQuestion.question}
              />

              <QuestOptions currentQuestion={currentQuestion} answerClick={handleAnswer}/>


            </div>
        </div>

        <NavigationQuest nextPage={handleNextQuestion} prevPage={handlePrevQuestion}/>

    </BookQuestStyle>
  )
}
