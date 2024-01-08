import React from 'react'
import { VocabularyStyle } from './Vocabulary.styled'

import CloseIc from '../../assets/img/icons/close.svg'

export const Vocabulary = ({onClose}) => {
  return (
    <VocabularyStyle>
        <div className="vocabulary">
            <button className='vocabulary__close' onClick={onClose}>
                <img src={CloseIc} alt="close ic" />
            </button>
            <h2>
                Vocabulary
            </h2>
            <ul className='vocabulary__list'>
                <li>
                    <div className="word">
                        <h3>
                            Word 1
                        </h3>
                    </div>
                    <div className="translation">
                        <p>
                            Translation
                        </p>
                    </div>
                </li>
                <li>
                    <div className="word">
                        <h3>
                            Word 2
                        </h3>
                    </div>
                    <div className="translation">
                        <p>
                            Translation
                        </p>
                    </div>
                </li>
                <li>
                    <div className="word">
                        <h3>
                            Word 3
                        </h3>
                    </div>
                    <div className="translation">
                        <p>
                            Translation
                        </p>
                    </div>
                </li>
                <li>
                    <div className="word">
                        <h3>
                            Word 4
                        </h3>
                    </div>
                    <div className="translation">
                        <p>
                            Translation
                        </p>
                    </div>
                </li>
                <li>
                    <div className="word">
                        <h3>
                            Word 5
                        </h3>
                    </div>
                    <div className="translation">
                        <p>
                            Translation
                        </p>
                    </div>
                </li>
            </ul>

            <button className='vocabulary__ok'>OK</button>
        </div>
    </VocabularyStyle>
  )
}
