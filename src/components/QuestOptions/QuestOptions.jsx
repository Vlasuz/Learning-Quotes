import React, { useState } from 'react'
import { QuestOptionsStyle } from './QuestOptions.styled'

export const QuestOptions = ({ currentQuestion }) => {
    const [answered, setAnswered] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null)

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        setAnswered(true);
    }



  return (
    <QuestOptionsStyle>
        {currentQuestion.answers.map((answer) => (
            <li key={answer}>
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
                </label>
            </li>
        ))}
    </QuestOptionsStyle>
  )
}
