import React, { useEffect, useState } from 'react'
import { QuestOptionsStyle } from './QuestOptions.styled'

export const QuestOptions = ({ dataItem, setAnsQuestion, setAnswerSelected}) => {
    const [selectedAnswer, setSelectedAnswer] = useState([]);

    const multiplyChoiceSelect = (answer) => {
        
        setSelectedAnswer(prev => {
            if (prev.some(item => item === answer.id) ) {
                return prev.filter(item => item !== answer.id)
            }
            return [...prev, answer.id];
            
        })
    };

    const oneChoiceSelect = (answer) => {
        setSelectedAnswer([answer.id])
    };

    const typeQuestion = {
        'one_choice': oneChoiceSelect,
        'multiple_choice': multiplyChoiceSelect,
    }

    useEffect(() => {
        setAnsQuestion(selectedAnswer)
        setAnswerSelected(selectedAnswer.length > 0);
    }, [selectedAnswer, setAnsQuestion, setAnswerSelected])

  return (
    <QuestOptionsStyle className='animate__animated animate__fadeInRight'>
        {dataItem?.options?.map((answer) => (
            <li key={answer.id} >
                <label htmlFor={answer.id}>                    
                    <input type="checkbox" id={answer.id} 
                        onChange={() => typeQuestion[dataItem.choice_type](answer)}
                        checked={selectedAnswer.includes(answer.id)}

                    />
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                            <path d="M8.75 2.75L3.59375 8L1.25 5.61364" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>

                    {answer.value}

                    {/* {answered && <div className='correct'>{answerStat[answer]}</div> } */}
                </label>
            </li>
        ))}
    </QuestOptionsStyle>
  )
}
