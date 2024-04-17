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

export const BookQuest = ({QuestData}) => {
  const [currentQuestionIn, setCurrentQuestionIn] = useState(0);
  const [questResult, setQuestResult] = useState(false);
  const filteredReadingQuestions = questData.filter(question => question.type !== 'book-reading');
  const currentQuestion = filteredReadingQuestions[currentQuestionIn];

  const handleNextQuestion = () => {
    if (currentQuestionIn < filteredReadingQuestions.length - 1) {
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

  return (
    <BookQuestStyle>
      <div className="book">
        <div className="book__lft">

          {currentQuestion.type === 'book' && <QuestTxt 
              questTitle={currentQuestion.titleDesc} 
              questTask={currentQuestion.description} 
            />
          }

          {currentQuestion.type === 'book-listening' && <ListeningQuestion 
              questTitle={currentQuestion.titleDesc} 
              questDesc ={currentQuestion.description} 
              audioUrls={currentQuestion.audioUrl}
            />
          }

          {currentQuestion.type === 'book-keywords' && <KeywordsQuestion 
              questTitle={currentQuestion.titleDesc}
              questWords={currentQuestion.words}
            />
          }

        </div>

        <div className="book__rht">

          {currentQuestion.type === 'book-listening' && <QuestionsQuest
              key={currentQuestion.id}
              questionTxt={'Question'}
              questionNum={currentQuestion.questionNum}
              questionTitle={currentQuestion.question}
            />
          }

          {currentQuestion.type === 'book' && <QuestionsQuest
              key={currentQuestion.id}
              questionTxt={'Question'}
              questionNum={currentQuestion.questionNum}
              questionTitle={currentQuestion.question}
            />
          }

          {currentQuestion.type === 'book-listening' && <QuestOptions currentQuestion={currentQuestion} answerClick={handleAnswer}/>}
          {currentQuestion.type === 'book' && <QuestOptions currentQuestion={currentQuestion} answerClick={handleAnswer}/>}

          {currentQuestion.type === 'book-keywords' && <QuestOptionsKey
              questions={currentQuestion.questions}
            />
          }

        </div>
      </div>

      {questResult && <QuestResult onClose={() => setQuestResult(false)}/>}

      <NavigationQuest nextPage={handleNextQuestion} prevPage={handlePrevQuestion}/>

    </BookQuestStyle>
  )
}
