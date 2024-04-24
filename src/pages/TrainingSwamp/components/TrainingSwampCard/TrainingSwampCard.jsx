import React, { useEffect, useState } from 'react'
import { TrainingSwampCardStyle } from './TrainingSwampCard.styledStyle'

import CorrectIc from '../../../../assets/img/icons/correct.svg'
import inCorrectIc from '../../../../assets/img/icons/incorrect.svg'

export const TrainingSwampCard = () => {
  const [flipped, setFlipped] = useState(false);
  const [buttonsDisabled, setButtonsDisabled] = useState(true);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      console.log('Правильна відповідь');
    } else {
      console.log('Неправильна відповідь');
    }
  }

  useEffect(() => {
    setButtonsDisabled(!flipped)
  }, [flipped])

  return (
    <TrainingSwampCardStyle>
      <div className={`card ${flipped ? ' active' : ''}`} onClick={() => setFlipped(!flipped)}>
        <h2>
          some word or words
          some word or words
          some word or words
          some word or words
          some word or words
        </h2>
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
    
  )
}
