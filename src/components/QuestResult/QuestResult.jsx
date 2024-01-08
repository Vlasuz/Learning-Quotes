import React from 'react'
import { QuestResultStyle } from './QuestResult.styled'

import CorrectIc from '../../assets/img/icons/correct.svg'
import InCorrectIc from '../../assets/img/icons/incorrect.svg'
import CloseIc from '../../assets/img/icons/close.svg'

export const QuestResult = () => {
  return (
    <QuestResultStyle>
        <div className="results">
            <button className='close__btn'>
                <img src={CloseIc} alt='close ic' />
            </button>
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

            <button className='ok__btn'>OK</button>
        </div>
    </QuestResultStyle>
  )
}
