import React, { useState } from 'react'
import HTMLReactParser from 'html-react-parser';
import { QuestTxtStyle } from './QuestTxt.styled'
import { Vocabulary } from '../Vocabulary/Vocabulary'

import VocabularyPh from '../../assets/img/vocabulary.png'

export const QuestTxt = ({ questTitle, questTask }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenVocabulary = () => {
        setIsOpen(!isOpen);
    }

  return (
    <QuestTxtStyle>
        <h2>
            {questTitle}
        </h2>
        <div className='translations__pos'>
            <p>
                {HTMLReactParser(questTask)}
            </p>
            {/* <div className="translations">
                <div className="translations__container">
                    <h2>
                        Translation: 
                    </h2>
                    <p>
                        some word
                    </p>
                </div>
                <button>Add to vocablyary</button>
            </div> */}
        </div>
        <button className="vocabulary" onClick={handleOpenVocabulary}>
            <img src={VocabularyPh} alt="book ph" />
            <p>
                Vocabulary
            </p>
        </button>

        

        {isOpen ? <Vocabulary onClose={() => setIsOpen(false)}/> : null }
    </QuestTxtStyle>
  )
}
