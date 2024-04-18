import React, { useEffect, useState } from 'react'
import { QuestOptionsStyle } from './QuestOptions.styled'

export const QuestOptions = ({ answerClick, dataItem, setAnsQuestion}) => {
    const [selectedAnswer, setSelectedAnswer] = useState([]);

    const handleAnswerClick = (answer) => {
        const isSelected = selectedAnswer.includes(answer)    

        setSelectedAnswer((prevSelected) => {
            if (isSelected) {
                return prevSelected.filter((selected) => selected !== answer);
            } else {
                return [...prevSelected, answer.id];
            };
        });
    }

    console.log(selectedAnswer);

    useEffect(() => {
        setAnsQuestion(selectedAnswer)
    }, [selectedAnswer])

  return (
    <QuestOptionsStyle className='animate__animated animate__fadeInRight'>
        {dataItem?.options?.map((answer) => (
            <li key={answer.id} onClick={() => answerClick(answer)}>
                <label htmlFor={answer.id}>                    
                    <input type="checkbox" id={answer.id} 
                        onChange={() => handleAnswerClick(answer)}
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
