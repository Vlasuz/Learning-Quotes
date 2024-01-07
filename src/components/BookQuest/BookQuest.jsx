import React, { useState } from 'react'
import { BookQuestStyle } from './BookQuest.styled'
import { QuestTxt } from '../QuestTxt/QuestTxt'
import { NavigationQuest } from '../NavigationQuest/NavigationQuest'
import { QuestionsQuest } from '../QuestionsQuest/QuestionsQuest'
import { QuestOptions } from '../QuestOptions/QuestOptions'
import { questData } from '../../assets/quiz/quiz'

export const BookQuest = () => {
  const [currentQuestionIn, setCurrentQuestionIn] = useState(0);
  const [correctQuestion, setCorrectQuestion] = useState(false);
  const currentQuestion = questData[currentQuestionIn];

  const handleNextQuestion = () => {
    if (currentQuestionIn < questData.length -1) {
      setCurrentQuestionIn((prevIndex) => prevIndex + 1);
      setCorrectQuestion(false);  
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIn > 0 ) {
      setCurrentQuestionIn((prevIndex) => prevIndex - 1);
    }
  };

  const handleAnswer = (selected) => {
    const isCorrect = selected === currentQuestion.correctAnswer;

    setCorrectQuestion(isCorrect);
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

              <QuestOptions currentQuestion={currentQuestion} answerClick={handleAnswer} correctQuestion={correctQuestion}/>

            </div>
        </div>

        <NavigationQuest nextPage={handleNextQuestion} prevPage={handlePrevQuestion}/>

    </BookQuestStyle>
  )
}
