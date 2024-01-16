import React, { useEffect, useState } from 'react'
import { QuestOptionsStyle } from './QuestOptions.styled'

import CorrectIc from '../../assets/img/icons/correct.svg'
import InCorrectIc from '../../assets/img/icons/incorrect.svg'

export const QuestOptions = ({ currentQuestion, answerClick }) => {
    const [answered, setAnswered] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answerStat, setAnswerStat] = useState({});

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        setAnswered(true);

        answerClick(answer);

        setAnswerStat((prevStat) => ({
            ...prevStat,
            [answer]: answer === currentQuestion.correctAnswer ? (
                <img src={CorrectIc} alt="correct ph" className='animate__animated animate__fadeIn'/>
                ) : (
                <img src={InCorrectIc} alt="incorrect ph" className='animate__animated animate__fadeIn'/>
            )
        }))
    }

    useEffect(() => {
        setAnswered(false);
        setSelectedAnswer(null);
    }, [currentQuestion])

  return (
    <QuestOptionsStyle>
        {currentQuestion.answers.map((answer) => (
            <li key={answer} onClick={() => answerClick(answer)}>
                <label htmlFor={`t-${currentQuestion.id}-${answer}`}>                    
                    <input type="checkbox" id={`t-${currentQuestion.id}-${answer}`} 
                        checked={answered && selectedAnswer === answer}
                        onChange={() => handleAnswerClick(answer)}
                    />
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                            <path d="M8.75 2.75L3.59375 8L1.25 5.61364" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>

                    {answer}

                    {answered && <div className='correct'>{answerStat[answer]}</div> }
                </label>
            </li>
        ))}
    </QuestOptionsStyle>
  )
}
