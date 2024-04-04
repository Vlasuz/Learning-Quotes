import React, { useEffect, useState } from 'react'
import { ReadindQuestOptionStyle } from './ReadindQuestOption.styled'
import { useDispatch } from 'react-redux';
import { addAnswer } from '../../redux/toolkitSlice';

export const ReadindQuestOption = ({ currentQuestion }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const optionNum = ['A.', 'B.', 'C.', 'D.', 'E.', 'F.'];
    const dispatch = useDispatch();

    const handleCheckBoxChange = (answer) => {
        const isSelected = selectedOptions.includes(answer)

        dispatch(addAnswer(answer.id));

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
            {currentQuestion?.map((answer, index) => (
                <li key={answer}>
                    <label 
                        htmlFor={answer.id}
                        className={selectedOptions.length > 0 && !selectedOptions.includes(answer) ? 'disabled' : ''}
                    >
                        <p>{optionNum[index]}</p>

                        {answer.value}

                        <input 
                            type="checkbox"
                            id={answer.id} 
                            onChange={() => handleCheckBoxChange(answer)}
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
