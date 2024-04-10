import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReadingQuestStyle } from './ReadingQuest.styled.js';
import { ReadingQuestQuestion } from '../ReadingQuestQuestion/ReadingQuestQuestion.jsx';
import { NavigationQuest } from '../NavigationQuest/NavigationQuest.jsx';
import { ReadindQuestOption } from '../ReadindQuestOption/ReadindQuestOption.jsx';
import { QuestResult } from '../QuestResult/QuestResult.jsx';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getApiLink } from '../../api/getApiLink.js';
import { setQuest } from '../../redux/toolkitSlice.js';
import getCookie from '../../functions/getCookie.js';
import { useSelector } from 'react-redux'

export const ReadingQuest = () => {
  const [currentQuestionIn, setCurrentQuestionIn] = useState(0);
  const [questResult, setQuestResult] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const QuestId = useSelector(state => state.toolkit.quest.id)
  // const Quest = useSelector(state => state.toolkit.quest)
  const QuestionId = useSelector(state => state.toolkit.quest.questions?.map(question => question.id))
  const QuestAnswers = useSelector(state => state.toolkit.answerQuest)

  console.log(QuestId);

  const isLastQuestion = quizData?.questions && currentQuestionIn === quizData.questions.length - 1;

  const handleNextQuestion = () => {
    if (currentQuestionIn < quizData.questions.length - 1) {
      setCurrentQuestionIn(prevIndex => prevIndex + 1);
    } else if (currentQuestionIn === quizData.questions.length - 1) {
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

  const handleEndQuest = () => {
    // const formEndQuest = {
    //   'id': QuestId,
    //   'answers_id': QuestAnswers,
    // }
    const formEndQuest = QuestionId?.map((questionId, index) => ({
      // 'id': questionId,
      // 'answer_id': [QuestAnswers[index] || []],
      "id": questionId,
      "answers_id": [
        QuestAnswers[index]
      ]
    }))

    // console.log(formEndQuest);

    axios.defaults.headers.common['Authorization'] = `Bearer ${getCookie('token')}`;

    axios.post(getApiLink(`/api/quest/end?id=${QuestId}`), formEndQuest)
      .then(({data}) => {
        console.log('endQuest', data);
      })
  }

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getCookie('token')}`;
  
    axios.get(getApiLink('/api/quest/active_quest'))
      .then(({data}) => {
        console.log(data);
        setQuizData(data)
        dispatch(setQuest(data))
      })
  }, [])

  // pk=be8bc086-dfa4-494e-a5ed-a5963f7c4700

  // useEffect(() => {
  //   axios.get(getApiLink('/api/quest/get?pk=be8bc086-dfa4-494e-a5ed-a5963f7c4700'))
  //     .then(({data}) => {
  //         setQuestDataPk(data.questions);
  //         dispatch(setQuest(data));
  //     })
  // }, [])

  // console.log(questDataPk);


  return (
    <div className='container-login'>
      <ReadingQuestStyle>
    
        <ReadingQuestQuestion
          testTitle={quizData?.name ?? ''}
          testQuestion={quizData?.questions?.length && quizData?.questions[currentQuestionIn].question}
        />

        <ReadindQuestOption currentQuestion={quizData?.questions?.length && quizData.questions[currentQuestionIn].options}/>


        <NavigationQuest
          nextPage={handleNextQuestion}
          prevPage={handlePrevQuestion}
          isLastQuestion={isLastQuestion}
          handleEndQuest={handleEndQuest}
        />

        {questResult && <QuestResult onClose={() => setQuestResult(false)} />}

      </ReadingQuestStyle>
    </div>
  );
};
