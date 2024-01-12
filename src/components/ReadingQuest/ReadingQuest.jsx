import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReadingQuestStyle } from './ReadingQuest.styled.js';
import { ReadingQuestQuestion } from '../ReadingQuestQuestion/ReadingQuestQuestion.jsx';
import { NavigationQuest } from '../NavigationQuest/NavigationQuest.jsx';
import { ReadindQuestOption } from '../ReadindQuestOption/ReadindQuestOption.jsx';
import { questData } from '../../assets/quiz/quiz.js';
import { QuestResult } from '../QuestResult/QuestResult.jsx';

export const ReadingQuest = () => {
  const [currentQuestionIn, setCurrentQuestionIn] = useState(0);
  const [questResult, setQuestResult] = useState(false);
  const navigate = useNavigate();
  const readingQuestions = questData.filter(question => question.type === 'book-reading');
  const currentQuestion = readingQuestions[currentQuestionIn];

  const handleNextQuestion = () => {
    if (currentQuestionIn < readingQuestions.length - 1) {
      setCurrentQuestionIn(prevIndex => prevIndex + 1);
    } else if (currentQuestionIn === readingQuestions.length - 1) {
      setQuestResult(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIn > 0) {
      setCurrentQuestionIn(prevIndex => prevIndex - 1);
      setQuestResult(false);
    } else if (currentQuestionIn === 0) {
      navigate('/quiz-start');
    }
  };

  return (
    <div className='container-login'>
      <ReadingQuestStyle>

        <ReadingQuestQuestion
          testTitle={currentQuestion ? currentQuestion.titleDesc : ''}
          testNumber={currentQuestion ? currentQuestion.questionNum : ''}
          testQuestion={currentQuestion ? currentQuestion.question : ''}
        />

        <ReadindQuestOption currentQuestion={currentQuestion} />

        <NavigationQuest
          nextPage={handleNextQuestion}
          prevPage={handlePrevQuestion}
        />

        {questResult && <QuestResult onClose={() => setQuestResult(false)} />}

      </ReadingQuestStyle>
    </div>
  );
};
