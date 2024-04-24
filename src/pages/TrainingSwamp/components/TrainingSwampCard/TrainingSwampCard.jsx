import React, { useEffect, useState } from 'react';
import { TrainingSwampCardStyle } from './TrainingSwampCard.styledStyle';
import CorrectIc from '../../../../assets/img/icons/correct.svg';
import inCorrectIc from '../../../../assets/img/icons/incorrect.svg';
import axios from 'axios';
import { getApiLink } from '../../../../api/getApiLink';
import getCookie from '../../../../functions/getCookie';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const TrainingSwampCard = () => {
  const [flipped, setFlipped] = useState(false);
  const [buttonsDisabled, setButtonsDisabled] = useState(true);
  const WordId = getCookie('trainingSwamp')
  // const [cardTitle, setCardTitle] = useState("Title");
  const userWordStorage = useSelector((state) => state.toolkit.userWords)
  const [cardWords, setCardWords] = useState(userWordStorage?.word?.word);
  const navigate = useNavigate();

  console.log(userWordStorage);
  const handleAnswerClick = (isCorrect) => { 
    axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie("token")}`;
    axios.post(getApiLink(`/api/vocabulary/answer_to_word?pk=${userWordStorage?.id}&correct=${isCorrect}`))
      .then(({ data }) => {
        console.log(data);
        navigate('/map')
      })
      .catch(err => {
        console.error(err);
        toast.warning(err?.response?.data?.detail)
      });
  };


  useEffect(() => {
    setButtonsDisabled(!flipped);
  }, [flipped]);

  return (
    <TrainingSwampCardStyle>
      <div className="card_con">
        <h2>
          Library
        </h2>
        <div className={`card${flipped ? ' active' : ''}`} onClick={() => setFlipped(!flipped)}>
          <span>
            {/* {flipped ? "Second Title" : cardTitle} */}
          </span>
          <p>
            {flipped ? userWordStorage?.word?.description : cardWords}
          </p>
        </div>
      </div>
      <div className="card__answ">
        <button disabled={buttonsDisabled}>
          <img src={inCorrectIc} onClick={() => handleAnswerClick(false)} alt="incorrect ic" />
        </button>
        <button disabled={buttonsDisabled}>
          <img src={CorrectIc} onClick={() => handleAnswerClick(true)} alt="correct ic" />
        </button>
      </div>
    </TrainingSwampCardStyle>
  );
};
