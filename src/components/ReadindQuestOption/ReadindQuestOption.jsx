import React, { useEffect, useState } from 'react'
import { ReadindQuestOptionStyle } from './ReadindQuestOption.styled'

export const ReadindQuestOption = ({ currentQuestion, setAnsQuestion }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const optionNum = ['A.', 'B.', 'C.', 'D.', 'E.', 'F.'];

    const multiplyChoiceSelect = (answer) => {
        
        setSelectedOptions(prev => {
            if (prev.some(item => item === answer.id) ) {
                return prev.filter(item => item !== answer.id)
            }
            return [...prev, answer.id];
            
        })
    };

    const oneChoiceSelect = (answer) => {
        setSelectedOptions([answer.id])
    };

    const typeQuestion = {
        'one_choice': oneChoiceSelect,
        'multiple_choice': multiplyChoiceSelect,
    }
      
    useEffect(() => {
        setAnsQuestion(selectedOptions);
    }, [selectedOptions]);

    useEffect(() => {
        setSelectedOptions([]);
    }, [currentQuestion]);

    return (
        <ReadindQuestOptionStyle>
            <ul>
                {currentQuestion?.options?.map((answer, index) => (
                    <li key={answer.id}>
                        <label 
                            htmlFor={answer.id}
                            // className={selectedOptions.length > 0 && !selectedOptions.includes(answer) ? 'disabled' : ''}
                        >
                            <p>{optionNum[index]}</p>

                            {answer.value}

                            <input 
                                type="checkbox"
                                id={answer.id} 
                                onChange={() => typeQuestion[currentQuestion.choice_type](answer)}
                                checked={selectedOptions.includes(answer.id)}
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
