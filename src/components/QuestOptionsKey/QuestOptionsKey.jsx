import React from 'react'
import { QuestOptionsKeyStyle } from './QuestOptionsKey.styled'

export const QuestOptionsKey = ({ questions }) => {
  return (
    <QuestOptionsKeyStyle>
        {questions.map(question => (
            <div className='quest' key={question.questId}>
                <h2>
                    {question.questionTitle}
                </h2>
                <ul>
                    {question.questionAnswers.map((option, index) => (
                        <li key={option}>
                            <label htmlFor={option.questionAnswers}>                    
                                <input type="checkbox" id={option.questionAnswers} 
                                />
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                        <path d="M8.75 2.75L3.59375 8L1.25 5.61364" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>

                                {option}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </QuestOptionsKeyStyle>
  )
}
