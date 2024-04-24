// import React, { useEffect, useState } from 'react'
// import { TrainingSwampCardStyle } from './TrainingSwampCard.styledStyle'

// import CorrectIc from '../../../../assets/img/icons/correct.svg'
// import inCorrectIc from '../../../../assets/img/icons/incorrect.svg'
// import getCookie from '../../../../functions/getCookie'
// import axios from 'axios'
// import { getApiLink } from '../../../../api/getApiLink'

// export const TrainingSwampCard = () => {
//   const [flipped, setFlipped] = useState(false);
//   const [buttonsDisabled, setButtonsDisabled] = useState(true);

//   const handleAnswerClick = (isCorrect) => {
//     if (isCorrect) {
//       console.log('Правильна відповідь');
//       getRes()
//     } else {
//       console.log('Неправильна відповідь');
//     }
//   }

//   const getRes = () => {
//     axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie("token")}`;
//     axios.post(getApiLink('/api/vocabulary/training_word'))
//       .then(({data}) => {
//         console.log(data);
//       })
//       .catch(err => {
//         console.error(err);
//       })
//   }

//   useEffect(() => {
    
//   }, [])

//   useEffect(() => {
//     setButtonsDisabled(!flipped)
//   }, [flipped])

//   return (
//     <TrainingSwampCardStyle>
//       <div className={`card ${flipped ? ' active' : ''}`} onClick={() => setFlipped(!flipped)}>
//         <h2>
//           title
//         </h2>
//         <p>
//           some word or words
//           some word or words
//           some word or words
//         </p>
//       </div>
//       <div className="card__answ">
//         <button disabled={buttonsDisabled}>
//           <img src={inCorrectIc} onClick={() => handleAnswerClick(false)} alt="incorrect ic" />
//         </button>
//         <button disabled={buttonsDisabled}>
//           <img src={CorrectIc} onClick={() => handleAnswerClick(true)} alt="correct ic" />
//         </button>
//       </div>
//     </TrainingSwampCardStyle>
    
//   )
// }



import React, { useEffect, useState } from 'react';
import { TrainingSwampCardStyle } from './TrainingSwampCard.styledStyle';
import CorrectIc from '../../../../assets/img/icons/correct.svg';
import inCorrectIc from '../../../../assets/img/icons/incorrect.svg';
import getCookie from '../../../../functions/getCookie';
import axios from 'axios';
import { getApiLink } from '../../../../api/getApiLink';

export const TrainingSwampCard = () => {
  const [flipped, setFlipped] = useState(false);
  const [buttonsDisabled, setButtonsDisabled] = useState(true);
  const [cardTitle, setCardTitle] = useState("Title");
  const [cardWords, setCardWords] = useState("Some word or words");

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      console.log('Правильна відповідь');
      getRes();
    } else {
      console.log('Неправильна відповідь');
    }
  };

  const getRes = () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie("token")}`;
    axios.post(getApiLink('/api/vocabulary/training_word'))
      .then(({ data }) => {
        console.log(data);
        // Оновлюємо дані для наступної картки
        setCardTitle(data.title);
        setCardWords(data.words);
      })
      .catch(err => {
        console.error(err);
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
            {flipped ? "Second Title" : cardTitle}
          </span>
          <p>
            {flipped ? "Different words or phrases" : cardWords}
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
