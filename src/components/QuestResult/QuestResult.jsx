import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { QuestResultStyle } from './QuestResult.styled'

import CorrectIc from '../../assets/img/icons/correct.svg'
import InCorrectIc from '../../assets/img/icons/incorrect.svg'
import CloseIc from '../../assets/img/icons/close.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setAnswer } from '../../redux/toolkitSlice'

export const QuestResult = ({ endedQuest }) => {

    const dataEndQuest = endedQuest.questions;
    const dataQuest = useSelector(state => state.toolkit.answerQuest);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const closeResult = () => {
        navigate('/map')
        dispatch(setAnswer([]))
    }

  return (
    <QuestResultStyle>
        <div className='results_bgd' onClick={() => navigate('/map')}></div>
        <div className="results">
            <NavLink to={'/map'} className='close__btn'>
                <img src={CloseIc} alt='close ic' />
            </NavLink>
            <h2>
                Results
            </h2>
            <ul className='question'>
                    {dataEndQuest?.map(item => (
                        <li key={item.id}>
                            <p>{item.question}</p>
                            <div className="question__inner">

                                {item?.options
                                    ?.filter(answerOption => {
                                        const currQuestion = dataQuest?.filter(ansOptionStore => ansOptionStore?.id === item?.id)[0];
                                        return currQuestion?.answers_id?.some(selectedOption => selectedOption === answerOption?.id);                           
                                    })
                                    ?.map(question => (
                                        <div className="question__answer">
                                            <p>
                                                {question.value}
                                            </p>
                                            {question.is_correct === true ? <img src={CorrectIc} alt="correct ic" /> : <img src={InCorrectIc} alt="incorrect ic" />}
                                            
                                        </div>
                                    ))
                                }
                            </div>
                        </li>
                    ))}
            </ul>

            <button onClick={() => closeResult()} className='ok__btn'>OK</button>
        </div>
    </QuestResultStyle>
  )
}
