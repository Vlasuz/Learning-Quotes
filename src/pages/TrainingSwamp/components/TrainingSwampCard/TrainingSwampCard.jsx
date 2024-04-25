import React, { useEffect, useState } from 'react';
import { TrainingSwampCardStyle } from './TrainingSwampCard.styledStyle';
import CorrectIc from '../../../../assets/img/icons/correct.svg';
import inCorrectIc from '../../../../assets/img/icons/incorrect.svg';
import axios from 'axios';
import { getApiLink } from '../../../../api/getApiLink';
import getCookie from '../../../../functions/getCookie';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserWords } from '../../../../redux/toolkitSlice';

export const TrainingSwampCard = () => {
  const [flipped, setFlipped] = useState(false);
  const [buttonsDisabled, setButtonsDisabled] = useState(true);
  const userWordStorage = useSelector((state) => state.toolkit.userWords)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(userWordStorage);

  const handleTakeWord = () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie("token")}`;
    axios.post(getApiLink('/api/vocabulary/training_word'))
      .then(({ data }) => {
        console.log(data);
        setTimeout(() => {
          dispatch(setUserWords(data))
        }, 350)
        setFlipped(false);
      })
      .catch(err => {
        console.error(err);
        if (err) {
          toast.warning(err?.response?.data?.detail)
          navigate('/map')
        }
      });
  }

  const handleAnswerClick = (isCorrect) => { 
    axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie("token")}`;
    axios.post(getApiLink(`/api/vocabulary/answer_to_word?pk=${userWordStorage?.id}&correct=${isCorrect}`))
      .then(({ data }) => {
        handleTakeWord();
      })
      .catch(err => {
        console.error(err);
        toast.warning(err?.response?.data?.detail)
      });
  };

  useEffect(() => { 
    handleTakeWord()
  }, [])


  useEffect(() => {
    setButtonsDisabled(!flipped);

    var cards = document.querySelectorAll('.card');

    [...cards].forEach((card)=>{
      card.addEventListener( 'click', function() {
        card.classList.toggle('is-flipped');
      });
    });

  }, [flipped]);

  return (
    <TrainingSwampCardStyle>
      <div className="card_con">
        <h2>
          Library
        </h2>

        <div className="scene scene--card">
          <div className={`card ${flipped ? ' is-flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
            <div className="card__face card__face--front">
              {userWordStorage?.word?.image ? (
                <div className="card_image">
                  <img src={getApiLink(`/${userWordStorage?.word?.image}`)} alt="ph" />
                </div>
                ) : (
                  ''
                )
              }
              {userWordStorage?.word?.word}
            </div>
            <div className="card__face card__face--back">
              {userWordStorage?.word?.image ? (
                <div className="card_image">
                  <img src={getApiLink(`/${userWordStorage?.word?.image}`)} alt="ph" />
                </div>
                ) : (
                  ''
                )
              }
              {userWordStorage?.word?.description}
            </div>
          </div>
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
