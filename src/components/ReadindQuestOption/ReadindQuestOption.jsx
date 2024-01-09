import React from 'react'
import { ReadindQuestOptionStyle } from './ReadindQuestOption.styled'

export const ReadindQuestOption = ({currentQuestion}) => {

  return (
    <ReadindQuestOptionStyle>
        <ul>
            {currentQuestion.answers.map((answer) => (
                <li key={answer}>
                    <label htmlFor={`q-${currentQuestion.id}-${answer}`}>                    
                        {answer}

                        <input type="checkbox" id={`q-${currentQuestion.id}-${answer}`} 
                        />
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                <path d="M8.75 2.75L3.59375 8L1.25 5.61364" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </label>
                </li>
            ))}
        </ul>
    </ReadindQuestOptionStyle>
  )
}
