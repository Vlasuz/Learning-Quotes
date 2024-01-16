import React, { useEffect, useState } from 'react'
import { ReadindQuestOptionStyle } from './ReadindQuestOption.styled'

export const ReadindQuestOption = ({ currentQuestion }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const optionNum = ['A.', 'B.', 'C.', 'D.', 'E.', 'F.']

    const handleChackBoxChange = (answer) => {
        const isSelected = selectedOptions.includes(answer)

        setSelectedOptions((prevSelected) => {
            if (isSelected) {
                return prevSelected.filter((selected) => selected !== answer);
            } else {
                return [...prevSelected, answer];
            };
        });
    };

    const clearSelectedOptions = () => {
       setSelectedOptions([]);
    };
      
    useEffect(() => {
        clearSelectedOptions();
    }, [currentQuestion]);

  return (
    <ReadindQuestOptionStyle>
        <ul>
            {currentQuestion.answers.map((answer) => (
                <li key={answer}>
                    <label 
                        htmlFor={`q-${currentQuestion.id}-${answer}`}
                        className={selectedOptions.length > 0 && !selectedOptions.includes(answer) ? 'disabled' : ''}
                    >
                        <p>{optionNum[currentQuestion.answers.indexOf(answer)]}</p>

                        {answer}

                        <input 
                            type="checkbox" 
                            id={`q-${currentQuestion.id}-${answer}`} 
                            onChange={() => handleChackBoxChange(answer)}
                            disabled={selectedOptions.length > 0 && !selectedOptions.includes(answer)}
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
