import React, { useState } from 'react'
import { BookQuestStyle } from './BookQuest.styled'
import { QuestTxt } from '../QuestTxt/QuestTxt'
import { NavigationQuest } from '../NavigationQuest/NavigationQuest'
import { QuestionsQuest } from '../QuestionsQuest/QuestionsQuest'
import { QuestOptions } from '../QuestOptions/QuestOptions'
import { questData } from '../../assets/quiz/quiz'
import { ListeningQuestion } from '../ListeningQuestion/ListeningQuestion'
import { KeywordsQuestion } from '../KeywordsQuestion/KeywordsQuestion'
import { QuestOptionsKey } from '../QuestOptionsKey/QuestOptionsKey'

export const BookQuest = () => {
  const [currentQuestionIn, setCurrentQuestionIn] = useState(0);
  const currentQuestion = questData[currentQuestionIn];

  const handleNextQuestion = () => {
    if (currentQuestionIn < questData.length -1) {
      setCurrentQuestionIn((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIn > 0 ) {
      setCurrentQuestionIn((prevIndex) => prevIndex - 1);
    }
  };

  const handleAnswer = (select) => {

  }

  const renderBookQuestTxt = () => {
    return  <QuestTxt 
        questTitle={currentQuestion.titleDesc} 
        questTask={currentQuestion.description} 
      />
  }

  const renderBookQuestionsQuest = () => {
    return <QuestionsQuest 
      key={currentQuestion.id}
      questionTxt={'Question'}
      questionNum={currentQuestion.questionNum}
      questionTitle={currentQuestion.question}
    />
  }

  const renderBookQuestOption = () => {
    return <QuestOptions currentQuestion={currentQuestion} answerClick={handleAnswer}/>
  }

  const renderListeningListeningQuestion = () => {
    return <ListeningQuestion 
      questTitle={currentQuestion.titleDesc} 
      questDesc ={currentQuestion.description} 
      audioUrls={currentQuestion.audioUrl}
    />
  }

  const renderListeningQuestOptionsKey = () => {
    return <QuestOptionsKey/>
  }


  return (
    <BookQuestStyle>
        <div className="book">
            <div className="book__lft">

              {/* <KeywordsQuestion /> */}

              {currentQuestion.type === 'book' && renderBookQuestTxt()}
              {currentQuestion.type === 'book-listening' && renderListeningListeningQuestion()}

            </div>

            <div className="book__rht">

            {currentQuestion.type === 'book-listening' && renderBookQuestionsQuest()}
            {currentQuestion.type === 'book' && renderBookQuestionsQuest()}

            {currentQuestion.type === 'book-listening' && renderBookQuestOption()}
            {currentQuestion.type === 'book' && renderBookQuestOption()}

              {/* <QuestOptionsKey/> */}

            </div>
        </div>

        <NavigationQuest nextPage={handleNextQuestion} prevPage={handlePrevQuestion}/>

    </BookQuestStyle>
  )
}
