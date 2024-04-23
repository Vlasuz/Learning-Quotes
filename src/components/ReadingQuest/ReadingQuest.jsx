import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReadingQuestStyle } from "./ReadingQuest.styled.js";
import { ReadingQuestQuestion } from "../ReadingQuestQuestion/ReadingQuestQuestion.jsx";
import { NavigationQuest } from "../NavigationQuest/NavigationQuest.jsx";
import { ReadindQuestOption } from "../ReadindQuestOption/ReadindQuestOption.jsx";
import { QuestResult } from "../QuestResult/QuestResult.jsx";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getApiLink } from "../../api/getApiLink.js";
import { addAnswer, setQuest } from "../../redux/toolkitSlice.js";
import getCookie from "../../functions/getCookie.js";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const ReadingQuest = () => {
  const [currentQuestionIn, setCurrentQuestionIn] = useState(0);
  const [questResult, setQuestResult] = useState(false);
  const [answerQuestion, setAnswerQuestion] = useState([]);
  const [ansQuestin, setAnsQuestion] = useState([]);
  const QuestStore = useSelector((state) => state.toolkit.quest);
  const [quizData, setQuizData] = useState(QuestStore);
  const [endedQuest, setEndedQuest] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { levelId } = useParams();

  const AnswerQuestStore = useSelector((state) => state.toolkit.answerQuest);

  const isLastQuestion = quizData?.questions && currentQuestionIn === quizData.questions.length - 1;
  const numQuest = currentQuestionIn + 1

  const handleNextQuestion = () => {
    const currentAnswers = {
      id: quizData.questions[currentQuestionIn].id,
      answers_id: ansQuestin,
    };
    setAnswerQuestion((prevAnswers) => [...prevAnswers, currentAnswers]);

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
      navigate("/quiz-start");
    }
  };

  const handleEndQuest = () => {
    handleNextQuestion();
  };


  useEffect(() => {
    console.log(QuestStore);
    console.log(AnswerQuestStore);

    if ( QuestStore?.id && AnswerQuestStore?.length === QuestStore?.questions?.length) {

      if (levelId === 'dlpt') {
        axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie("token")}`;
        axios.post(getApiLink(`/api/quest/dlpt_end?id=${QuestStore.id}`), AnswerQuestStore)
          .then(({ data }) => {
            console.log("endQuest", data);
            setEndedQuest(data)
          })
          .catch((err) => {
            console.error(err);
            toast.error(err?.response?.data?.detail)
            navigate('/map');
          }) 
      } else {
        axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie("token")}`;
        axios.post(getApiLink(`/api/quest/end?id=${QuestStore.id}`), AnswerQuestStore)
          .then(({ data }) => {
            console.log("endQuest", data);
            setEndedQuest(data)
          })
          .catch((err) => {
            console.error(err);
            toast.error(err?.response?.data?.detail)
            navigate('/map');
          }) 
      }
    } else return;

  }, [AnswerQuestStore])

  console.log(QuestStore?.id);

  useEffect(() => {
    
    if (QuestStore?.id) return;
    
    axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie("token")}`;
    axios.get(getApiLink("/api/quest/active_quest"))
      .then(({ data }) => {
        setQuizData(data);
        dispatch(setQuest(data));
      })
      .catch((err) => {
        console.error(err);
        toast.error(err?.response?.data?.detail)
        navigate('/map');
    }) 
  }, []);

  return (
    <div className="container-login">
      <ReadingQuestStyle>
        <ReadingQuestQuestion
          testTitle={quizData?.name ?? ""}
          testQuestion={
            quizData?.questions?.length &&
            quizData?.questions[currentQuestionIn].question
          }
          numQuest={numQuest}
        />

        <ReadindQuestOption
          currentQuestion={quizData?.questions?.length && quizData.questions[currentQuestionIn]}
          setAnsQuestion={setAnsQuestion}
        />

        <NavigationQuest
          nextPage={handleNextQuestion}
          prevPage={handlePrevQuestion}
          isLastQuestion={isLastQuestion}
          handleEndQuest={handleEndQuest}
        />

        {questResult && (
          <QuestResult endedQuest={endedQuest} onClose={() => setQuestResult(false)} />
        )}
      </ReadingQuestStyle>
    </div>
  );
};
