import React from 'react'
import { Link } from 'react-router-dom'
import { QuestResultStyle } from './QuestResult.styled'

import CorrectIc from '../../assets/img/icons/correct.svg'
import InCorrectIc from '../../assets/img/icons/incorrect.svg'
import CloseIc from '../../assets/img/icons/close.svg'

export const QuestResult = ({ onClose }) => {
  return (
    <QuestResultStyle>
        <div className="results">
            <Link className='close__btn' onClick={onClose}>
                <img src={CloseIc} alt='close ic' />
            </Link>
            <h2>
                Results
            </h2>
            <ul className='question'>
                <li>
                    <p>Question 1</p>
                    <div className="question__answer">
                        <p>
                            B
                        </p>
                        <img src={CorrectIc} alt="correct ic" />
                    </div>
                    <div className="question__answer">
                        <p>
                            C
                        </p>
                        <img src={InCorrectIc} alt="incorrect ic" />
                    </div>
                </li>
                <li>
                    <p>Question 2</p>
                    <div className="question__answer">
                        <p>
                            B
                        </p>
                        <img src={CorrectIc} alt="correct ic" />
                    </div>
                    <div className="question__answer">
                        <p>
                            C
                        </p>
                        <img src={InCorrectIc} alt="incorrect ic" />
                    </div>
                </li>
                <li>
                    <p>Question 3</p>
                    <div className="question__answer">
                        <p>
                            B
                        </p>
                        <img src={CorrectIc} alt="correct ic" />
                    </div>
                    <div className="question__answer">
                        <p>
                            C
                        </p>
                        <img src={InCorrectIc} alt="incorrect ic" />
                    </div>
                </li>
                <li>
                    <p>Question 4</p>
                    <div className="question__answer">
                        <p>
                            B
                        </p>
                        <img src={CorrectIc} alt="correct ic" />
                    </div>
                    <div className="question__answer">
                        <p>
                            C
                        </p>
                        <img src={InCorrectIc} alt="incorrect ic" />
                    </div>
                </li>
                <li>
                    <p>Question 5</p>
                    <div className="question__answer">
                        <p>
                            B
                        </p>
                        <img src={CorrectIc} alt="correct ic" />
                    </div>
                    <div className="question__answer">
                        <p>
                            C
                        </p>
                        <img src={InCorrectIc} alt="incorrect ic" />
                    </div>
                </li>
            </ul>

            <Link to={'/quiz-start'} className='ok__btn'>OK</Link>
        </div>
    </QuestResultStyle>
  )
}
