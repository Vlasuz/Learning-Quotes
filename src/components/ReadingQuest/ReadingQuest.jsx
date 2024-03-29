import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReadingQuestStyle } from './ReadingQuest.styled.js';
import { ReadingQuestQuestion } from '../ReadingQuestQuestion/ReadingQuestQuestion.jsx';
import { NavigationQuest } from '../NavigationQuest/NavigationQuest.jsx';
import { ReadindQuestOption } from '../ReadindQuestOption/ReadindQuestOption.jsx';
import { questData } from '../../assets/quiz/quiz.js';
import { QuestResult } from '../QuestResult/QuestResult.jsx';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getApiLink } from '../../api/getApiLink.js';
import { setQuest } from '../../redux/toolkitSlice.js';

export const ReadingQuest = () => {
  const [currentQuestionIn, setCurrentQuestionIn] = useState(0);
  const [questResult, setQuestResult] = useState(false);
  const navigate = useNavigate();
  const readingQuestions = questData.filter(question => question.type === 'book-reading');
  const currentQuestion = readingQuestions[currentQuestionIn];

  const quizData = useSelector(state => state.toolkit.quest);
  const dispatch = useDispatch();

  console.log(quizData);

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

  useEffect(() => {
    axios.get(getApiLink('/api/quest/get?pk=be8bc086-dfa4-494e-a5ed-a5963f7c4700'))
      .then(({data}) => {
          console.log(data);
          dispatch(setQuest(data))
      })
  }, [])

  return (
    <div className='container-login'>
      <ReadingQuestStyle>

        <ReadingQuestQuestion
          testTitle={quizData?.quest_text ?? ''}
          // testNumber={quizData ? quizData.length : ''}
          testQuestion={quizData?.questions?.length && quizData?.questions[0].question}
        />

        <ReadindQuestOption currentQuestion={quizData?.questions?.length && quizData?.questions[0].options} />

        <NavigationQuest
          nextPage={handleNextQuestion}
          prevPage={handlePrevQuestion}
        />

        {questResult && <QuestResult onClose={() => setQuestResult(false)} />}

      </ReadingQuestStyle>
    </div>
  );
};
