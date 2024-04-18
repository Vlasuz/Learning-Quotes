import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReadingQuestStyle } from "./ReadingQuest.styled.js";
import { ReadingQuestQuestion } from "../ReadingQuestQuestion/ReadingQuestQuestion.jsx";
import { NavigationQuest } from "../NavigationQuest/NavigationQuest.jsx";
import { ReadindQuestOption } from "../ReadindQuestOption/ReadindQuestOption.jsx";
import { QuestResult } from "../QuestResult/QuestResult.jsx";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getApiLink } from "../../api/getApiLink.js";
import { addAnswer, setQuest, setAnswer } from "../../redux/toolkitSlice.js";
import getCookie from "../../functions/getCookie.js";
import { useSelector } from "react-redux";

export const ReadingQuest = () => {
  const [currentQuestionIn, setCurrentQuestionIn] = useState(0);
  const [questResult, setQuestResult] = useState(false);
  const [answerQuestion, setAnswerQuestion] = useState([]);
  const [ansQuestin, setAnsQuestion] = useState([]);
  const [quizData, setQuizData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const QuestStore = useSelector((state) => state.toolkit.quest);
  const AnswerQuestStore = useSelector((state) => state.toolkit.answerQuest);

  console.log(answerQuestion);
  console.log(AnswerQuestStore);

  const isLastQuestion = quizData?.questions && currentQuestionIn === quizData.questions.length - 1;

  console.log(quizData?.questions?.length);
  
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

    console.log(AnswerQuestStore?.length);
    console.log(quizData?.questions?.length);

    if (AnswerQuestStore?.length === quizData?.questions?.length) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie("token")}`;
  
      axios.post(getApiLink(`/api/quest/end?id=${QuestStore.id}`), AnswerQuestStore)
        .then(({ data }) => {
          console.log("endQuest", data);
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

  return (
    <div className="container-login">
      <ReadingQuestStyle>
        <ReadingQuestQuestion
          testTitle={quizData?.name ?? ""}
          testQuestion={
            quizData?.questions?.length &&
            quizData?.questions[currentQuestionIn].question
          }
        />

        <ReadindQuestOption
          currentQuestion={
            quizData?.questions?.length &&
            quizData.questions[currentQuestionIn].options
          }
          setAnsQuestion={setAnsQuestion}
        />

        <NavigationQuest
          nextPage={handleNextQuestion}
          prevPage={handlePrevQuestion}
          isLastQuestion={isLastQuestion}
          handleEndQuest={handleEndQuest}
        />

        {questResult && (
          <QuestResult onClose={() => setQuestResult(false)} />
        )}
      </ReadingQuestStyle>
    </div>
  );
};
