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
import { QuestResult } from '../QuestResult/QuestResult'

export const BookQuest = () => {
  const [currentQuestionIn, setCurrentQuestionIn] = useState(0);
  const [questResult, setQuestResult] = useState(false);
  const currentQuestion = questData[currentQuestionIn];

  const handleNextQuestion = () => {
    if (currentQuestionIn < questData.length -1) {
      setCurrentQuestionIn((prevIndex) => prevIndex + 1);
    } else {
      setQuestResult(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIn > 0 ) {
      setCurrentQuestionIn((prevIndex) => prevIndex - 1);
      setQuestResult(false)
    }
  };

  const handleAnswer = (select) => {
    // Обробка відповідей
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

  const renderKeyQuestOptionsKey = () => {
    return <QuestOptionsKey
      questions={currentQuestion.questions}
    />
  }
  
  const renderKeyKeywordsQuestion = () => {
    return <KeywordsQuestion 
      questTitle={currentQuestion.titleDesc}
      questWords={currentQuestion.words}
    />
  }

  return (
    <BookQuestStyle>
        <div className="book">
            <div className="book__lft">

              {currentQuestion.type === 'book' && renderBookQuestTxt()}
              {currentQuestion.type === 'book-listening' && renderListeningListeningQuestion()}
              {currentQuestion.type === 'book-keywords' && renderKeyKeywordsQuestion()}

            </div>

            <div className="book__rht">

              {currentQuestion.type === 'book-listening' && renderBookQuestionsQuest()}
              {currentQuestion.type === 'book' && renderBookQuestionsQuest()}

              {currentQuestion.type === 'book-listening' && renderBookQuestOption()}
              {currentQuestion.type === 'book' && renderBookQuestOption()}

              {currentQuestion.type === 'book-keywords' && renderKeyQuestOptionsKey()}

            </div>
        </div>

        {questResult && <QuestResult onClose={() => setQuestResult(false)}/>}

        <NavigationQuest nextPage={handleNextQuestion} prevPage={handlePrevQuestion}/>

    </BookQuestStyle>
  )
}
